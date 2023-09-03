import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const modules = [
  HttpClientModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
