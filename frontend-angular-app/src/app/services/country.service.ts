import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

const baseUrl = 'http://localhost:6868/api/countries';

export class CountryService {

  /* ----------------- NOT IN USE ----------------- */
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(baseUrl);
  }

  get(id: any): Observable<Country> {
    return this.http.get<Country>(`${baseUrl}/${id}`);
  }

  create(data: Country): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Country[]> {
    return this.http.get<Country[]>(`${baseUrl}?title=${title}`);
  }
}
