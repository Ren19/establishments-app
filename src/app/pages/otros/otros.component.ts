import { Component, Input, OnInit, ViewChild, Inject} from '@angular/core';
import {PostService} from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { GlobalConstants } from '../../common/global-constants';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css'],
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
  ]
})


export class OtrosComponent implements OnInit {

  @Input({ required: false })
  email!:string;


  constructor() {


  }

  ngOnInit() {
  }

  public clickGuardar(){
    sessionStorage.setItem('email', this.email);
  }

  public clickNuevo(){
    this.email="";
  }

}
