import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoption-panel',
  templateUrl: './adoption-panel.component.html',
  styleUrls: ['./adoption-panel.component.scss']
})
export class AdoptionPanelComponent implements OnInit {

  listDog = ['waf', 'snooupi', 'rantamplan', 'rex'];
  afficheInfo = true;
  constructor() { }

  ngOnInit(): void {
  }

}
