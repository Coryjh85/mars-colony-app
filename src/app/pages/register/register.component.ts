import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { Colonist } from '../../models/colonist';
import { JobsService } from '../../services/jobs.service';
import { ColonistService } from '../../services/colonist.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder, Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

const cantBe = (value: string): ValidatorFn => {
  return (control: AbstractControl) => {
    return control.value === value ? { 'Cant be this value': value } : null;
  };
};

const tooOld = (age: number): ValidatorFn => {
  return (control: AbstractControl) => {
    return control.value > age ? { 'you are too old to go to mars': age } : null;
  };
};


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

  constructor(private router: Router,
              private jobService: JobsService,
              private colonistService: ColonistService,
              private formBuilder: FormBuilder) {}

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
      age: new FormControl('', [Validators.required, tooOld(100)]),
      job_id: new FormControl(this.NO_JOB_SELECTED, [cantBe(this.NO_JOB_SELECTED)])
    });

}
register(e){
  e.preventDefault();
  if(this.registerForm.invalid){
  }else {
    const name = this.registerForm.get('name').value;
    const age = this.registerForm.get('age').value;
    const job_id = this.registerForm.get('job_id').value;

    const colonist = new Colonist(name, age, job_id);
     this.colonistService.postData(colonist).subscribe((newColonist) => {
           window.localStorage.setItem('colonist_id',
                            newColonist.colonist.id);
       this.router.navigate(['encounters']);
         });
    }
  }
}

