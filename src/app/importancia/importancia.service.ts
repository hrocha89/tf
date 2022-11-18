import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImportanciaService {

  url = 'assets/pdf/teach-fono.pdf';

  constructor(private _httpClient: HttpClient) {
  }


  downloadPdf(): Observable<Blob> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this._httpClient.get(this.url, {headers: headers, responseType: 'blob'});
  }

}
