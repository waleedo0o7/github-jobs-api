import { Component, OnInit } from '@angular/core';
import { jobs } from './jobs.module'
import { JobsService } from './jobs.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jobs-app';
  jobs : jobs[];

  constructor( private dataService : JobsService){

  }

  

  ngOnInit(){
    return this.dataService.getJobs().subscribe(data => this.jobs = data);
  }

}
