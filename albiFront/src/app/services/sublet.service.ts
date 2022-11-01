import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sublet } from '@models/sublet';
import { SubletInfo } from '@models/subletinfo';
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

  public getSubletInfos(): Observable<SubletInfo[]> {
	  return this.http.get<SubletInfo[]>(`${this.apiServerUrl}/sublets`);	  
  }

  public getSubletInfosByUser(userId: number): Observable<SubletInfo[]> {
	  return this.http.get<SubletInfo[]>(`${this.apiServerUrl}/sublets/user/${userId}`);	  
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

  public getUnusedCount(): Observable<any>{
    return this.http.get<number>(`${this.apiServerUrl}/files/unused`);	 
  }

  public deleteUnusedImages(): Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/files/unused`);	 
  }

  public deleteSublets(subletId: number): Observable<any> {
    let a = `${this.apiServerUrl}/sublets/${subletId}`;
	  return this.http.delete<any>(a);	
  }
}
