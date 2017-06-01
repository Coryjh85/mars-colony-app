import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { Colonist } from '../../models/colonist';
import { JobsService } from '../../services/jobs.service';
import { ColonistService } from '../../services/colonist.service';
import {
  FormGroup,
  FormControl,
  FormBuilder, Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [JobsService, ColonistService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  colonist: Colonist;
  jobs: Job[] = [];
  NO_JOB_SELECTED = '(none)';

  constructor(private jobService: JobsService, private colonistService: ColonistService, private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.jobService.getData()
        .subscribe((data) => {
        this.jobs = data.jobs;
      });

    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3)]),
      age: new FormControl('', [Validators.required]),
      job_id: new FormControl(this.NO_JOB_SELECTED, [])
    });

}

}

