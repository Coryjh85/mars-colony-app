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
  colonist: Colonist;

  constructor(private jobService: JobsService, private colonistService: ColonistService) {}

  ngOnInit() {}

}