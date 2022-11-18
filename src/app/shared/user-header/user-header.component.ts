import { Component, Input, OnInit } from '@angular/core';
import { WebStorageUtil } from '../util/web-storage-util';
import { Key } from '../util/key';

@Component({
  selector: 'app-header',
  template: `

  `
})
export class UserHeaderComponent implements OnInit {

  label: string = '';

  ngOnInit() {
    this.label = WebStorageUtil.get(Key.USER).substring(0, 1).toUpperCase();
  }

}
