import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  showMobileMenu: boolean = false;
  userDrpDown: boolean = false;
 

  constructor() {}

  ngOnInit(): void {
  }


}
