import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jobs } from './jobs.module'

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  apiURL = 'https://jobs.github.com/positions.json';

  constructor(private http: HttpClient) { }

  getJobs(){
    return this.http.get<jobs[]>(this.apiURL);
  }
}
