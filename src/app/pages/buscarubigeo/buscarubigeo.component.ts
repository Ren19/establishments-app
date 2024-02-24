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
import {Buscarvarios02Component} from '../buscarvarios02/buscarvarios02.component';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {PostService} from '../../services/post.service';
import { HttpClient } from '@angular/common/http';


export interface Ubigeo {
  columna1: string;
  columna2: string;
}

const datosUbigeo: Ubigeo[] = [
  {columna1: '-', columna2: '-'},
  {columna1: '-', columna2: '-'},
  {columna1: '-', columna2: '-'},
];






@Component({
  selector: 'app-buscarubigeo',
  templateUrl: './buscarubigeo.component.html',
  styleUrls: ['./buscarubigeo.component.css'],
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




export class BuscarubigeoComponent implements OnInit {


  constructor(private service:PostService,
              public dialog: MatDialogRef<BuscarubigeoComponent>,
              public dialogBv: MatDialog,) {


  }




  clickedRowsUbigeo = new Set<Ubigeo>();
  displayedColumnsUbigeo: string[] = ['columna1', 'columna2'];
  dataSourceUbigeo = new MatTableDataSource<Ubigeo>(datosUbigeo);





  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  date: Date[] | undefined;

  index=0;

  selectedItemUbigeo!:Ubigeo;

  ngOnInit(): void {

  }


  clickUbigeo(row:Ubigeo) {
    this.selectedItemUbigeo = row;
    console.log('selectedItemUbigeo:', this.selectedItemUbigeo);
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

  clickBuscarVarios(): void {

    console.log('BUSCAR>>>');

    const dialogRef = this.dialogBv.open(Buscarvarios02Component, {

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
