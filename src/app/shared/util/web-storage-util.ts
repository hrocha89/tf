import { Key } from './key';

export class WebStorageUtil {

  static get(key: string): any {
    return localStorage.getItem(key) || '';
  }

  static set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  static getTheme(): string {
    return localStorage.getItem(Key.THEME) || '';
  }

  static setTheme(val: string) {
    localStorage.setItem(Key.THEME, val);
  }

}
