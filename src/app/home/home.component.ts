import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  go(rota: string) {
    this.router.navigate([rota], {relativeTo: this.activatedRoute})
  }


}
