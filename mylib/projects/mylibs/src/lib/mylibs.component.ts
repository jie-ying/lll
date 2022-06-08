import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'lib-mylibs',
  template: `
    <p>test test</p>
  `,
  styles: [
    `
      p{
        color: red;
      }
    `
  ]
})
export class MylibsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }

}
