import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello',
  // template: 'hello from template',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit, OnDestroy {

  state = false;
  compter = 0;
  title = 'vide';
  public date: Date;
  url = 'https://media-exp1.licdn.com/dms/image/C4D1BAQHOI9rS1cshuA/company-background_10000/0/1527235488552?e=2159024400&v=beta&t=UjdYB3W3TCpSA82skyhc3r6FEfTXhE235oxqAFANwwc';
  isButtonDisabled = false;

  constructor() {
    this.date = new Date(2021, 2, 23);
  }

  ngOnInit(): void {
    console.log('on init hello');
    this.state = true;
    this.title = 'hello from var';


  }

  ngOnDestroy(): void {
    console.log('on destroy hello');
  }


  testFn(parameter: string): number {
    const val = 42;
    return val;
  }

  iVeBeenClicked(): void {
    this.compter++;
    if (this.compter > 3) {
      this.isButtonDisabled = true;
    }
    console.log('click, compter = ' + this.compter);
  }
}
