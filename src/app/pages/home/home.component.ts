import { Component, OnInit } from '@angular/core';
import { SdrAngelApiService } from 'src/app/shared/services/sdr-angel-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private api: SdrAngelApiService) {

  }
  ngOnInit(): void {
    this.api.getCurrentState().subscribe((response) => {
      console.log(response)
    });
  }

 

}
