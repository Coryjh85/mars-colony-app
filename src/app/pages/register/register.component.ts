import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { Colonist } from '../../models/colonist';
import { JobsService } from '../../services/jobs.service';
import { ColonistService } from '../../services/colonist.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [JobsService, ColonistService]
})
export class RegisterComponent implements OnInit {
  jobs: Job[] = [];
  colonistName: string;
  colonistAge: string;
  colonistJobId: string = 'no job';
  public colonists: Colonist;

  constructor(private jobService: JobsService, private colonistService: ColonistService) {}

  ngOnInit() {
    this.jobService.getData()
      .subscribe((data) => {
        this.jobs = data.jobs;
      });
  }
  postColonist(){
    const colonist = new Colonist(this.colonistName, this.colonistAge, this.colonistJobId);
               this.colonistService.postData(colonist)
                        .subscribe((newColonist) => {})
  }
}
