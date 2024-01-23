import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor(private http: HttpClient) {}

  getPdf(filename: string): Observable<Blob> {
    let blobObservable = this.http.get('http://localhost:8080/api/pdf/download/' + filename, { responseType: 'blob' });
    return blobObservable;
  }
}
