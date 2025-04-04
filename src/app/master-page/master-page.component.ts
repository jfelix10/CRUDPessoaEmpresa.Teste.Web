import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-master-page',
  imports: [RouterModule, CommonModule],
  templateUrl: './master-page.component.html',
  styleUrl: './master-page.component.css'
})
export class MasterPageComponent {
  closeOpenSideBar = 'closeSideBar';
  mainCloseOpen = 'mainClose';
  btnCloseOpen = 'btn btn-dark btn-tab btn-tab-close';
  seta = '>>';


  constructor() {}

  openCloseNav() {
    if(this.closeOpenSideBar == 'closeSideBar')
    {
      this.closeOpenSideBar = 'openSideBar';
      this.mainCloseOpen = 'mainOpen';
      this.btnCloseOpen = 'btn btn-dark btn-tab btn-tab-open';
      this.seta = '<<';
    }
    else 
    {
      this.closeOpenSideBar = 'closeSideBar';
      this.mainCloseOpen = 'mainClose';
      this.btnCloseOpen = 'btn btn-dark btn-tab btn-tab-close';
      this.seta = '>>';
    }
  }

}
