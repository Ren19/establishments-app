import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

import {DataSource} from '@angular/cdk/collections';
import {CdkTableModule} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';


import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatPaginator} from '@angular/material/paginator';

import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {Buscarseleccionarvarios01aComponent} from '../buscarseleccionarvarios01a/buscarseleccionarvarios01a.component';
import {Buscarseleccionarvarios01a2Component} from '../buscarseleccionarvarios01a2/buscarseleccionarvarios01a2.component';
import {Buscarseleccionarvarios01bComponent} from '../buscarseleccionarvarios01b/buscarseleccionarvarios01b.component';

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


export interface Actividad{
  name: string;
}

const ELEMENT_DATA_ACTIVIDAD: Actividad[] = [
  {name: 'Exportacion 1'},
  {name: 'Exportacion 2'},
  {name: 'Exportacion 3'},
  {name: 'Exportacion 4'},
  {name: 'Exportacion 5'},
];

export interface TipoProd{
  name: string;
}

const ELEMENT_DATA_TIPOPROD: TipoProd[] = [
  {name: 'Producto 1'},
  {name: 'Producto 2'},
  {name: 'Producto 3'},
  {name: 'Producto 4'},
  {name: 'Producto 5'},
];


export interface GrupoProducto {
  clasificacion: string;
  subclasificacion: string;
  grupoproducto: string;
  subgrupo: string;
}

const ELEMENT_DATA: GrupoProducto[] = [
  {clasificacion: "Clasificacion1", subclasificacion: 'SubClasificacion1',grupoproducto:'Grupo1',subgrupo:'SubGrupo1'},
  {clasificacion: "Clasificacion2", subclasificacion: 'SubClasificacion2',grupoproducto:'Grupo2',subgrupo:'SubGrupo2'},
  {clasificacion: "Clasificacion3", subclasificacion: 'SubClasificacion3',grupoproducto:'Grupo3',subgrupo:'SubGrupo3'},
  {clasificacion: "Clasificacion4", subclasificacion: 'SubClasificacion4',grupoproducto:'Grupo4',subgrupo:'SubGrupo4'},
  {clasificacion: "Clasificacion5", subclasificacion: 'SubClasificacion5',grupoproducto:'Grupo5',subgrupo:'SubGrupo5'},
];



@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  standalone: true,
  imports: [CommonModule,
            MatTabsModule,
            MatTableModule,
            MatSortModule,
            MatButtonModule,
            MatPaginatorModule,],
})
export class ActividadesComponent implements OnInit {

  constructor(private service:PostService,
              public dialogBs01a: MatDialog,
              public dialogBs01a2: MatDialog,
              public dialogBs01b: MatDialog,) {}





  displayedColumnsGrupoProducto: string[] = ['clasificacion','subclasificacion','grupoproducto','subgrupo'];
  dataSourceGrupoProducto = new MatTableDataSource<GrupoProducto>(ELEMENT_DATA);

  displayedColumnsActividad: string[] = ['name'];
  dataSourceActividad = new MatTableDataSource<Actividad>(ELEMENT_DATA_ACTIVIDAD);

  displayedColumnsTipoProd: string[] = ['name'];
  dataSourceTipoProd = new MatTableDataSource<TipoProd>(ELEMENT_DATA_TIPOPROD);



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //selectedItemIdx!:PeriodicElement;

  ngOnInit(): void {

  }

  selectRowActiviad(row:Actividad) {
   // this.selectedItemIdx = row;
   // console.log('selectedItemIdx:', this.selectedItemIdx);
  }

  selectRowTipoProd(row:TipoProd) {
    // this.selectedItemIdx = row;
    // console.log('selectedItemIdx:', this.selectedItemIdx);
   }

   singleRowGrupoProd(row:GrupoProducto) {
    // this.selectedItemIdx = row;
    // console.log('selectedItemIdx:', this.selectedItemIdx);
   }

   clickBuscarActiviadades(){

    console.log('BUSCAR>>>');



    const dialogRef = this.dialogBs01a.open(Buscarseleccionarvarios01aComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '60%',
      width: '70%',
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

   clickBuscarTipoProducto(){

    console.log('BUSCAR>>>');

    const dialogRef = this.dialogBs01a2.open(Buscarseleccionarvarios01a2Component, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '60%',
      width: '70%',
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

   clickBuscarGruposProductos(){

    console.log('BUSCAR>>>');

    const dialogRef = this.dialogBs01b.open(Buscarseleccionarvarios01bComponent, {

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
