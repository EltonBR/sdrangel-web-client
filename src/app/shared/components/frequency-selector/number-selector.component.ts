import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-number-selector',
  templateUrl: './number-selector.component.html',
  styleUrls: ['./number-selector.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NumberSelectorComponent implements AfterViewInit, OnChanges {

  @ViewChildren('freqDigit') freqDigits!: QueryList<any>;
  @Input() frequencyKhz!: number;
  @Output() onChangeFrequency = new EventEmitter<number>();
  @Input() styleNum = 2;
  displayFrequency = 0;
  @Input() maxDigits = 7;
  
  ngAfterViewInit(): void {
    this.bindEvents(this.freqDigits.toArray())
    this.setFrequency(this.frequencyKhz)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['frequencyKhz']) {
      if (!changes['frequencyKhz'].firstChange)
      this.setFrequency(this.frequencyKhz)
    }
  }

  sumToFrequency(frequency: number): void {

    if (this.displayFrequency+frequency < 0 || (this.displayFrequency+frequency).toString().length >= this.freqDigits.length+1) {
      return;
    }

    this.displayFrequency = this.displayFrequency+frequency;
    let digits = this.freqDigits.toArray().reverse();
    digits.forEach((item) => item.nativeElement.value = '0'); //clear display frequency
    let tmp = this.displayFrequency.toString().split('').reverse();
    tmp.forEach((digit, index) => digits[index].nativeElement.value = digit);
    this.onChangeFrequency.emit(this.displayFrequency);
  }

  setFrequency(frequency: number): void {
    if (frequency < 0 || frequency > parseFloat(`9e${this.freqDigits.length-1}`)) {
      return;
    }

    let digits = this.freqDigits.toArray().reverse();
    digits.forEach((item) => item.nativeElement.value = '0'); //clear display frequency
    let tmp = frequency.toString().split('').reverse();
    tmp.forEach((digit, index) => digits[index].nativeElement.value = digit);
    this.displayFrequency = frequency;
    this.onChangeFrequency.emit(this.displayFrequency);
  }

  multiplyByIndex(index: number): number {
    return parseInt(`1${''.padEnd(Math.abs(index-(this.freqDigits.length-1)), '0')}`);
  }

  bindEvents(digits: ElementRef[]): void {
    let inputElements: HTMLInputElement[] = digits.map((element) => element.nativeElement);
    
    inputElements.forEach((inputElement: HTMLInputElement, index: number) => {
      //init inputs
      inputElement.maxLength = 1;
      if (inputElement.value.length == 0) {
        inputElement.value = '0';
      }

      fromEvent(inputElement, "keydown").subscribe((event) => event.preventDefault());
      // increment decrement frequency by mouse wheel
      fromEvent(inputElement, "wheel").subscribe((event: Partial<WheelEvent>) => {
        if (event.deltaY! < 0) {
          this.sumToFrequency(this.multiplyByIndex(index));

        } else if (event.deltaY! > 0) {
          this.sumToFrequency(-this.multiplyByIndex(index));
        }
      });

      fromEvent(inputElement, "keyup").subscribe((event: any) => {
        if (event.key === 'Backspace') {
          if (index > 0) {
            inputElements[index-1].focus();
            return;
          }
        }
        if (event.key >= 0 && event.key < 10 ) {

          inputElement.value = event.key;
          if(inputElements.length-1 !== index) {
            inputElements[index+1].focus();
          }
          this.displayFrequency = parseInt(inputElements.map((x) => x.value).reduce((acc, val) => `${acc}${val}`));
          this.onChangeFrequency.emit(this.displayFrequency);
        }
      });
    })
  }

}
