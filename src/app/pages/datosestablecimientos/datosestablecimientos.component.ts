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
import { RegistroPersonalComponent } from '../registropersonal/registropersonal.component';
import { RegistrorepresentantelegalComponent } from '../registrorepresentantelegal/registrorepresentantelegal.component';
import { BuscarubigeoComponent } from '../buscarubigeo/buscarubigeo.component';
import {FormsModule} from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {PostService} from '../../services/post.service';
import { HttpClient } from '@angular/common/http';


export interface Persona {
  apellidos: string;
  cargo: string;
}

const representanteLegal: Persona[] = [
  {apellidos: 'CHONG  HONG JUAN AURELIO', cargo: 'DIRECTOR'},
  {apellidos: '', cargo: ''},
  {apellidos: '', cargo: ''},
  {apellidos: '', cargo: ''},
  {apellidos: '', cargo: ''},
  {apellidos: '', cargo: ''},
  {apellidos: '', cargo: ''},
];
const personal: Persona[] = [
  {apellidos: 'CASTILLA MORAN LUIS MIGUEL', cargo: 'DIRECTOR TECNICO'},
  {apellidos: '', cargo: ''},
  {apellidos: '', cargo: ''},
  {apellidos: '', cargo: ''},
  {apellidos: '', cargo: ''},
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
}
//const ELEMENT_DATAHORARIO_NULL: DiaHorario[] = [];


const ELEMENT_DATAHORARIO: DiaHorario[] = [
  {dia: "", horario: ""},
  {dia: "", horario: ""},
  {dia: "", horario: ""},
  {dia: "", horario: ""},
  {dia: "", horario: ""},
  {dia: "", horario: ""},
  {dia: "", horario: ""},
];


@Component({
  selector: 'app-datosestablecimientos',
  templateUrl: './datosestablecimientos.component.html',
  styleUrls: ['./datosestablecimientos.component.css'],
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




export class DatosestablecimientosComponent implements OnInit {

  dataSourceHorario: MatTableDataSource<DiaHorario>;

  constructor(private service:PostService,
              public dialogRp: MatDialog,
              public dialogRrl: MatDialog,
              public dialogBu: MatDialog,
              private httpClient: HttpClient) {


    this.dataSourceHorario = new MatTableDataSource<DiaHorario>(ELEMENT_DATAHORARIO);

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
  displayedColumnsHorario: string[] = ['dia', 'horario'];



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

    this.dataSourceHorario = new MatTableDataSource<DiaHorario>(ELEMENT_DATAHORARIO);
    ELEMENT_DATAHORARIO.splice(0,this.dataSourceHorario.data.length);

    if(this.diaIni==this.diaFin){
      this.dataSourceHorario.data.push({dia: this.listDia[this.diaIni-1].descripcion, horario: this.horaIni+"-"+this.horaFin});
      this.dataSourceHorario.filter = "";
    }else{
      for (let i = this.diaIni; i <= this.diaFin; ++i){
        this.dataSourceHorario.data.push({dia: this.listDia[i-1].descripcion, horario: this.horaIni+"-"+this.horaFin});
        this.dataSourceHorario.filter = "";
      }
    }

  }

  eliminarHora(): void {

    ELEMENT_DATAHORARIO.splice(0,this.dataSourceHorario.data.length);
    for (let i = 0; i <= 6; ++i){
      this.dataSourceHorario.data.push({dia: "", horario: ""});
      this.dataSourceHorario.filter = "";
    }

  }


  clickBuscarPersonal(): void {

    console.log('BUSCAR>>>');

    const dialogRef = this.dialogRp.open(RegistroPersonalComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '95%',
      width: '95%',
      panelClass: 'full-screen-modal',
      data:{solcodigo: "",solindipro: ""},


    });

    dialogRef.afterClosed().subscribe(result => {

      //this.razonsocial=result.soldescrip;
      //this.ruc=result.solnumeruc;
      //this.nomcomercial=result.solnombcom;

      console.log('value0:',result);

      let req={
        "lcCodDisa":"000",
        "lcNroSolicitud":result.solcodigo
      }



       this.service.getCargaSolicitud(req).subscribe(response => {

        //this.cargarSolicitudEstablecimiento = response;

         //this.numeroexpediente=response.expcodigo.substring(2);
         //this.anioexpediente=response.expcodigo.substring(0,2);

         //let tempFechaRegistro = new Date(this.cargarSolicitudEstablecimiento.expfechreg);
         //let tempFechaExpediente= new Date(this.cargarSolicitudEstablecimiento.expfechreg);

         //this.fechaRegistro = new DatePipe("en-US").transform(tempFechaRegistro, "yyyy-MM-dd")+"";
         //this.fechaExpediente = new DatePipe("en-US").transform(tempFechaExpediente, "yyyy-MM-dd")+"";

         //console.log('this.cargarSolicitudEstablecimiento:',this.cargarSolicitudEstablecimiento );

        });



    });



  }




  clickBuscarRepresentanteLegall(): void {

    console.log('BUSCAR>>>');

    const dialogRef = this.dialogRp.open(RegistrorepresentantelegalComponent, {

      data:{solcodigo: "",solindipro: ""},


    });

    dialogRef.afterClosed().subscribe(result => {

      //this.razonsocial=result.soldescrip;
      //this.ruc=result.solnumeruc;
      //this.nomcomercial=result.solnombcom;

      console.log('value0:',result);

      let req={
        "lcCodDisa":"000",
        "lcNroSolicitud":result.solcodigo
      }



       this.service.getCargaSolicitud(req).subscribe(response => {

        //this.cargarSolicitudEstablecimiento = response;

         //this.numeroexpediente=response.expcodigo.substring(2);
         //this.anioexpediente=response.expcodigo.substring(0,2);

         //let tempFechaRegistro = new Date(this.cargarSolicitudEstablecimiento.expfechreg);
         //let tempFechaExpediente= new Date(this.cargarSolicitudEstablecimiento.expfechreg);

         //this.fechaRegistro = new DatePipe("en-US").transform(tempFechaRegistro, "yyyy-MM-dd")+"";
         //this.fechaExpediente = new DatePipe("en-US").transform(tempFechaExpediente, "yyyy-MM-dd")+"";

         //console.log('this.cargarSolicitudEstablecimiento:',this.cargarSolicitudEstablecimiento );

        });



    });



  }


  clickBuscarUbigeo(): void {

    console.log('BUSCAR>>>');

    const dialogRef = this.dialogRp.open(BuscarubigeoComponent, {

      data:{solcodigo: "",solindipro: ""},


    });

    dialogRef.afterClosed().subscribe(result => {

      //this.razonsocial=result.soldescrip;
      //this.ruc=result.solnumeruc;
      //this.nomcomercial=result.solnombcom;

      console.log('value0:',result);

      let req={
        "lcCodDisa":"000",
        "lcNroSolicitud":result.solcodigo
      }



       this.service.getCargaSolicitud(req).subscribe(response => {

        //this.cargarSolicitudEstablecimiento = response;

         //this.numeroexpediente=response.expcodigo.substring(2);
         //this.anioexpediente=response.expcodigo.substring(0,2);

         //let tempFechaRegistro = new Date(this.cargarSolicitudEstablecimiento.expfechreg);
         //let tempFechaExpediente= new Date(this.cargarSolicitudEstablecimiento.expfechreg);

         //this.fechaRegistro = new DatePipe("en-US").transform(tempFechaRegistro, "yyyy-MM-dd")+"";
         //this.fechaExpediente = new DatePipe("en-US").transform(tempFechaExpediente, "yyyy-MM-dd")+"";

         //console.log('this.cargarSolicitudEstablecimiento:',this.cargarSolicitudEstablecimiento );

        });



    });



  }



}




