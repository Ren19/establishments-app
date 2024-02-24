import { Component,ViewChild,OnInit,AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

import {DataSource} from '@angular/cdk/collections';
import {CdkTableModule} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule,MatTable} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {FormsModule} from '@angular/forms';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';


export interface Persona {
  apellidos: string;
  cargo: string;
}

const representanteLegal: Persona[] = [
  {apellidos: 'CHONG  HONG JUAN AURELIO', cargo: 'DIRECTOR'},
  {apellidos: '', cargo: ''},
  {apellidos: '', cargo: ''},
];
const personal: Persona[] = [
  {apellidos: 'CASTILLA MORAN LUIS MIGUEL', cargo: 'DIRECTOR TECNICO'},
  {apellidos: '', cargo: ''},
  {apellidos: '', cargo: ''},
];



export interface Dia {
  id: number;
  descripcion: string;
}

export interface DiaHorario {
  dia: string;
  horario: string;
  detalle: string;
}
const ELEMENT_DATAHORARIO: DiaHorario[] = [
  {dia: "gdafsadf", horario: "dfg", detalle:""},
  {dia: "dfg", horario: "fdg", detalle:""},
  {dia: "", horario: "dg", detalle:""},
  {dia: "", horario: "", detalle:""},
  {dia: "", horario: "", detalle:""},
  {dia: "", horario: "", detalle:""},
  {dia: "", horario: "", detalle:""},
];





@Component({
  selector: 'app-registropersonal',
  templateUrl: './registropersonal.component.html',
  styleUrls: ['./registropersonal.component.css'],
  standalone: true,
  imports: [
            CommonModule,
            MatFormFieldModule,
            MatNativeDateModule,
            MatDatepickerModule,
            MatTabsModule,
            MatIconModule,
            MatTableModule,
            MatSortModule,
            MatButtonModule,
            MatPaginatorModule,
            MatSelectModule,
            MatInputModule,
            FormsModule],
})




export class RegistroPersonalComponent implements OnInit {

  dataSourceHorario = new MatTableDataSource<DiaHorario>;
  constructor(private router: Router,
              public dialog: MatDialogRef<RegistroPersonalComponent>,) {

    this.dataSourceHorario = new MatTableDataSource(ELEMENT_DATAHORARIO);
  }


  listDia:Dia[]=[{id:1,descripcion:"Lunes"},
                 {id:2,descripcion:"Martes"},
                 {id:3,descripcion:"Miercoles"},
                 {id:4,descripcion:"Jueves"},
                 {id:5,descripcion:"Viernes"},
                 {id:6,descripcion:"Sabado"},
                 {id:7,descripcion:"Domingo"}];


  clickedRowsPersonal = new Set<Persona>();
  displayedColumnsPersonal: string[] = ['apellidos', 'cargo'];
  dataSourcePersonal = new MatTableDataSource<Persona>(personal);

  clickedRowsRepresentanteLegal = new Set<Persona>();
  displayedColumnsRepresentanteLegal: string[] = ['apellidos', 'cargo'];
  dataSourceRepresentanteLegal = new MatTableDataSource<Persona>(representanteLegal);



  diaIni:number=1;
  diaFin:number=1;

  horaIni!:Date;
  horaFin!:Date;



  clickedRowsDH = new Set<DiaHorario>();
  displayedColumnsHorario: string[] = ['dia', 'horario',"detalle"];

  //dataSourceHorario = ELEMENT_DATAHORARIO;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  date: Date[] | undefined;

  index=0;

  selectedItemIdx!:Persona;
  selectedItemHorario!:DiaHorario;

  ngOnInit(): void {

  }

  clickPersonal(row:Persona) {
    this.selectedItemIdx = row;
    console.log('selectedItemIdx:', this.selectedItemIdx);
  }
  clickRepresentanteLegal(row:Persona) {
    this.selectedItemIdx = row;
    console.log('selectedItemIdx:', this.selectedItemIdx);
  }
  clickDiaHorario(row:DiaHorario) {
    this.selectedItemHorario = row;
    console.log('selectedItemHorario:', this.selectedItemHorario);
  }



  guardarHora(): void {



  }

  eliminarHorario(): void {
    //this.dataSourceHorario.data.splice(this.dataSourceHorario.data.indexOf("ll"), 1);
  }

  onNoClick2(): void {
    //this.dialog.close(this.data);
    this.dialog.close();
  }

  onNoClick(): void {
    this.dialog.close();
  }

}




