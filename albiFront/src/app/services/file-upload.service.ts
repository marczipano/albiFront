import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.apiServerUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  upload2(file: File): Observable<string>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiServerUrl}/upload`, formData, {responseType: 'text'});
  }
  

  getFiles(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/files`);
  }
}
