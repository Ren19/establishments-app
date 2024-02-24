import { Component, OnInit,Inject } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Profile } from 'src/app/models/profile';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';


export interface LoginData {
  usuario: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user!: FormGroup;
  loading = false;
  submitted = false;
  currentProfile!: Profile;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              public dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: LoginData,
              ) {

    }

  ngOnInit() {

    this.user = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

   }


   onSubmit() {
    // TODO: Use EventEmitter with form value

    this.submitted = true;

    // stop here if form is invalid
    //if (this.user.invalid) {
        //return;
    //}

    this.loading = true;
    this.router.navigate(['/']);
     // this.router.navigateByUrl('/login');

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get f() { return this.user.controls; }


}
