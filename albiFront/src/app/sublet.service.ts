import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sublet } from './sublet';
import { SubletInfo } from './subletinfo';
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

  public getSubletsByUser(userId: number): Observable<Sublet[]> {
	  return this.http.get<Sublet[]>(`${this.apiServerUrl}/sublets/user/${userId}`);	  
  }

  public getSubletInfos(): Observable<SubletInfo[]> {
	  return this.http.get<SubletInfo[]>(`${this.apiServerUrl}/sublets`);	  
  }

  public getSubletInfosOrdered(command: string): Observable<SubletInfo[]> {
	  return this.http.get<SubletInfo[]>(`${this.apiServerUrl}/sublets?o=${command}`);	  
  }

  public findSubletInfoByAddress(address: string): Observable<SubletInfo[]> {
	  return this.http.get<SubletInfo[]>(`${this.apiServerUrl}/sublets/find?a=${address}`);	  
  }
  public getSubletsById(subletId: number): Observable<Sublet> {
	  return this.http.get<Sublet>(`${this.apiServerUrl}/sublets/${subletId}`);	  
  }

  public addSublets(sublet: Sublet): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/sublets`, sublet);	  
  }

  public addImagesToSublet(id: number, images: string[]): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/sublets/${id}/addImages`, images);
  }

  public addImage(formData: FormData): Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/imageUpload`, formData);	 
  }

  public deleteSublets(subletId: number): Observable<any> {
    let a = `${this.apiServerUrl}/sublets/${subletId}`;
	  return this.http.delete<any>(a);	
  }
}
