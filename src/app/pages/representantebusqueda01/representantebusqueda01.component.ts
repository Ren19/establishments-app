import { Component, Input, AfterViewInit, OnInit, ViewChild, Inject} from '@angular/core';
//import {PostService} from '../../services/post.service';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormGroup, FormBuilder } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

export interface PeriodicElement {
  nrorepresentante: string;
  fechaincri: string;
  nombre: string;
  tipodoc: string;
  docid: string;
  sit: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nrorepresentante: '', fechaincri: '', nombre: '', tipodoc: '',docid: '',sit:''},
  {nrorepresentante: '', fechaincri: '', nombre: '', tipodoc: '',docid:'' ,sit:''},
  {nrorepresentante: '', fechaincri: '', nombre: '', tipodoc: '',docid:'' ,sit:''},
  {nrorepresentante: '', fechaincri: '', nombre: '', tipodoc: '',docid:'' ,sit:''},
  {nrorepresentante: '', fechaincri: '', nombre: '', tipodoc: '',docid:'' ,sit:''},
  {nrorepresentante: '', fechaincri: '', nombre: '', tipodoc: '',docid:'' ,sit:''},
  {nrorepresentante: '', fechaincri: '', nombre: '', tipodoc: '',docid:'' ,sit:''},

];




@Component({
  selector: 'representantebusqueda01',
  templateUrl: 'representantebusqueda01.component.html',
  styleUrls: ['./representantebusqueda01.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    //MatDialogTitle,
    //MatDialogContent,
    //MatDialogActions,
    //MatDialogClose,
  ],
})


export class RepresentanteBusqueda01Component implements OnInit {
//AfterViewInit {



  constructor(
    public dialogRef: MatDialogRef<RepresentanteBusqueda01Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    //private service:PostService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) {


  }

  form!: FormGroup;

  displayedColumns: string[] = ['nrorepresentante', 'fechaincri', 'nombre', 'tipodoc', 'docid', 'sit'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input({ required: false })
  numeroexpediente!:String;

  @Input({ required: false })
  expbuscar!:String;

  @Input({ required: false })
  anioexpediente!:String;

  opetipo="XXXX";
  dsacodigo="000";
  solnumeins="%268%";
  tipobusqueda="1";


  selectedItemIdx!:PeriodicElement;


  singlePayment(row:PeriodicElement) {
    this.selectedItemIdx = row;
    console.log('selectedItemIdx:', this.selectedItemIdx);
  }


  ngOnInit(): void {

  }


  submit(form:any) {
    this.dialogRef.close(`${form.value.filename}`);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  clickbuscarvarios(): void {


  }
  clickbuscarvariosDisa(): void {


  }

  buscarClick(): void {


    let req={
     "opetipo":this.opetipo,
     "dsacodigo":this.dsacodigo,
     "solnumeins":this.solnumeins,
     "tipobusqueda":this.tipobusqueda,
     "expbuscar":"%"+this.expbuscar+"%"
   }


  }






  onNoClick2(value:any): void {


    this.data.animal=value;
    console.log('The dialog was closed222:'+value);
    this.dialogRef.close();
  }



}
