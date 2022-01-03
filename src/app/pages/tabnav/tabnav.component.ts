import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-tabnav',
  templateUrl: './tabnav.component.html',
  styleUrls: ['./tabnav.component.less']
})
export class TabnavComponent implements OnInit {
  openTab = 1;
  constructor() { }

  ngOnInit(): void {
  }

  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }

}
