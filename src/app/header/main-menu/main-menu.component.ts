import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent {
  menuList: string[] = ['Home', 'Products', 'About', 'Contact', 'Sale'];
  dataList: string[] = ['Azhar', 'Shahid', 'Aubaid', 'Mac', 'Jack'];
}
