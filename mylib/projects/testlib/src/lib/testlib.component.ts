import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-testlib',
  template: `
    <p>
      testlib works!
    </p>
    <input placeholder="text">
  `,
  styles: [
  ]
})
export class TestlibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
