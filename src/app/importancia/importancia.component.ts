import { Component } from '@angular/core';
import { ImportanciaService } from './importancia.service';

@Component({
  template: `
    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-outline-success" (click)="download()">Baixar PDF</button>
      </div>
    </div>
  `
})
export class ImportanciaComponent {

  constructor(private _service: ImportanciaService) {
  }


  download() {
    this._service.downloadPdf().subscribe(res => {
      let url = window.URL.createObjectURL(res);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'TeachFono-PDF';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    })
  }


}
