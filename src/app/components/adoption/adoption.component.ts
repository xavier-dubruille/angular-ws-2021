import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit {

  @Input() dog = '';
  constructor() { }

  ngOnInit(): void {
  }

}
