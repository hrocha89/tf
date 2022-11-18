import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { WebStorageUtil } from '../util/web-storage-util';
import { Key } from '../util/key';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user = new User('', '');

  ngOnInit() {
  }


  login() {
    WebStorageUtil.set(Key.USER, this.user.name);
    WebStorageUtil.set(Key.PASSWORD, this.user.password);
  }


}
