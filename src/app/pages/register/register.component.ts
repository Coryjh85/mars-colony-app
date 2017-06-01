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

  constructor(private jobService: JobsService, private colonistService: ColonistService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3)]),

      age: new FormControl('', [Validators.required]),
      job_id: new FormControl('', [])
    });
}

}