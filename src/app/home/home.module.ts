import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    PanelMenuModule,
    ButtonModule,
    RippleModule
  ]
})
export class HomeModule {

}
