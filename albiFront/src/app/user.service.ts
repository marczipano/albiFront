import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/test/all`, { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/test/user`, { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/test/mod`, { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/test/admin`, { responseType: 'text' });
  }
}
