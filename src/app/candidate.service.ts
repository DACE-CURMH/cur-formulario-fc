import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidate } from './candidate';
import { Observable } from 'rxjs';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private url = 'https://script.google.com/macros/s/AKfycbz2p2HunWgmiRAnTdU_446s7Y5NMsGwsGke3kPZusc2hpcVh0iLyO-UiBHU2JjP8HMz/exec';
  public candidate: Candidate = new Candidate();
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  };

  constructor(private http: HttpClient) { }

  addCandidate(candidate: Candidate): Observable<Result> {
    let data = JSON.stringify(candidate);
    let encode = btoa(encodeURI(data));
    let url = this.url + "?func=1&data=" + encode;
    
    return this.http.get<Result>(url);
  }

  verifyCedula(cedula: string){
    let candidate: Candidate;
    let url: string;
    let encode: string;

    candidate = new Candidate();
    candidate.cedula = cedula;
    encode = btoa(encodeURI(JSON.stringify(candidate)));
    url = this.url + "?func=2&data=" + encode;
    return this.http.get<Result>(url);
  }
}