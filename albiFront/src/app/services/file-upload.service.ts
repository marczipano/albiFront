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

  upload2(file: File): Observable<string>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiServerUrl}/upload`, formData, {responseType: 'text'});
  }
  

  getFiles(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/files`);
  }
}
