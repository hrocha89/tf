import { NgModule } from '@angular/core';
import { UserHeaderModule } from '../user-header/user-header.module';
import { MenuHeaderComponent } from './menu-header.component';
import { NgForOf } from '@angular/common';


@NgModule({
    imports: [
        UserHeaderModule,
        NgForOf
    ],
  declarations: [
    MenuHeaderComponent
  ],
  exports: [
    MenuHeaderComponent
  ]
})
export class MenuHeaderModule {

}
