import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import {Igetdata} from '../igetdata';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {
 
 constructor(private http: HttpClient) {}

 getdata() {
  const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Origin', '*');

       return this.http.get<Igetdata>('https://cors-anywhere.herokuapp.com/http://dev-test.hews.com.au/people.json', {headers});
}

}
