import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
import { WebStorageUtil } from '../util/web-storage-util';
import { Key } from '../util/key';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-header.component.html'
})
export class MenuHeaderComponent implements AfterViewInit {

  @ViewChild('mobile') sideNav?: ElementRef;

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

  logOff() {
    WebStorageUtil.set(Key.USER, '');
    WebStorageUtil.set(Key.PASSWORD, '');
  }


}
