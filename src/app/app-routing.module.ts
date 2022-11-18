import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubSistemasComponent } from './sub-sistemas/sub-sistemas.component';
import { HipoteseComponent } from './hipotese/hipotese.component';
import { SobreComponent } from './sobre/sobre.component';
import { ImportanciaComponent } from './importancia/importancia.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'sub', component: SubSistemasComponent
  },
  {
    path: 'hipotese', component: HipoteseComponent
  },
  {
    path: 'sobre', component: SobreComponent
  },
  {
    path: 'pdf', component: ImportanciaComponent
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
