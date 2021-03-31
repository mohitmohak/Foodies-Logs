import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Data} from './data'; 
import {Contact} from './contact';
@Injectable({
  providedIn: 'root'
})
export class IntegrateService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Data[]> {
    return this.httpClient.get<Data[]>("http://localhost:3000/blog/")
  }
  create(blog: any): Observable<Data>{
    return this.httpClient.post<Data>("http://localhost:3000/blog/",JSON.stringify(blog), this.httpOptions)
  }
  create1(blog: any): Observable<Contact>{
    return this.httpClient.post<Contact>("http://localhost:3000/contact/",JSON.stringify(blog), this.httpOptions)
  }

  find(id: String | number): Observable<Data> {
    return this.httpClient.get<Data>("http://localhost:3000/blog/"+id)
  }
  
  update(id: String | number, blog: any): Observable<Data>{
    return this.httpClient.put<Data>("http://localhost:3000/blog/"+id,JSON.stringify(blog), this.httpOptions)
  }
  delete(id: number)
  {
    return this.httpClient.delete<Data>("http://localhost:3000/blog/" + id,this.httpOptions)
  }
}
function blog(blog: any): any {
  throw new Error('Function not implemented.');
}

