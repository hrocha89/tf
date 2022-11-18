import { Component, OnInit } from '@angular/core';
import { WebStorageUtil } from './shared/util/web-storage-util';
import { Key } from './shared/util/key';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  label: string = '';
  year!: number;

  ngOnInit(): void {
    this.label = WebStorageUtil.get(Key.USER).substring(0, 1).toUpperCase();
    this.year = new Date().getFullYear();
  }

  isLogged(): boolean {
    return !!WebStorageUtil.get(Key.USER) && !!WebStorageUtil.get(Key.PASSWORD);
  }

}
