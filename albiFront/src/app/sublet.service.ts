import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sublet } from './sublet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubletService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getSublets(): Observable<Sublet[]> {
	  return this.http.get<Sublet[]>(`${this.apiServerUrl}/sublets`);	  
  }

  public getSubletsById(subletId: number): Observable<Sublet> {
	  return this.http.get<Sublet>(`${this.apiServerUrl}/sublets/${subletId}`);	  
  }

  public addSublets(sublet: Sublet): Observable<any> {
	  return this.http.post<any>(`${this.apiServerUrl}/sublets`, sublet);	  
  }

  public deleteSublets(subletId: number): Observable<any> {
    let a = `${this.apiServerUrl}/courses/${subletId}`;
	  return this.http.delete<any>(a);	
  }
}
