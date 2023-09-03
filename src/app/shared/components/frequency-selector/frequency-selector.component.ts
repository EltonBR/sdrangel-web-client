import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-frequency-selector',
  templateUrl: './frequency-selector.component.html',
  styleUrls: ['./frequency-selector.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FrequencySelectorComponent implements OnInit, AfterViewInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['frequency'].currentValue);
  }
  @ViewChildren('freqDigit') freqDigits!: QueryList<any>;
  @Input() frequencyKhz!: number;
  displayFrequency = 0;

  multiplyByIndex(index: number): number {
    return parseInt(`1${''.padEnd(Math.abs(index-6), '0')}`);
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
        }
      });
    })
  }
  
  ngAfterViewInit(): void {
    this.bindEvents(this.freqDigits.toArray())
    this.setFrequency(this.frequencyKhz)
  }

  sumToFrequency(frequency: number): void {

    if (this.displayFrequency+frequency < 0 || this.displayFrequency+frequency > 9e6) {
      return
    }

    this.displayFrequency = this.displayFrequency+frequency;
    let digits = this.freqDigits.toArray().reverse();
    digits.forEach((item) => item.nativeElement.value = '0'); //clear display frequency
    let tmp = this.displayFrequency.toString().split('').reverse();
    tmp.forEach((digit, index) => digits[index].nativeElement.value = digit);
  }

  setFrequency(frequency: number): void {

    if (frequency < 0 || frequency > 9e6) {
      console.log(frequency)
      return;
    }

    let digits = this.freqDigits.toArray().reverse();
    digits.forEach((item) => item.nativeElement.value = '0'); //clear display frequency
    let tmp = frequency.toString().split('').reverse();
    tmp.forEach((digit, index) => digits[index].nativeElement.value = digit);
    this.displayFrequency = frequency;
  }

  ngOnInit(): void {
  }
}
