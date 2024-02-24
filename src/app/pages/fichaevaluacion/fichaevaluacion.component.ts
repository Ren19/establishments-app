import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import {MatPaginator} from '@angular/material/paginator';

import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import {DataSource} from '@angular/cdk/collections';
import {CdkTableModule} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';


import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';


export interface Tramite{
  tramite:string;
  descripcion:string;
}

const ELEMENT_DATA_TRAMITE: Tramite[] = [
  {tramite: 'tramite 1',descripcion:''},
  {tramite: 'tramite 2',descripcion:''},
  {tramite: 'tramite 3',descripcion:''},
  {tramite: 'tramite 4',descripcion:''},
  {tramite: 'tramite 5',descripcion:''},
]

export interface DetalleEvaluacion{
  tipoDetalle:string;
}

const ELEMENT_DATA_DETALLE_EVALUACION: DetalleEvaluacion[] = [
  {tipoDetalle: 'tipoDetalle 1'},
  {tipoDetalle: 'tipoDetalle 2'},
  {tipoDetalle: 'tipoDetalle 3'},
  {tipoDetalle: 'tipoDetalle 4'},
  {tipoDetalle: 'tipoDetalle 5'},
]

export interface RespuestaNotificaciones{
  numero:string;
  anexo:string;
  fecha:string;
}

const ELEMENT_DATA_RESPUESTA_NOTIFICACIONES: RespuestaNotificaciones[] = [
  {numero: '#  1',anexo:'',fecha:''},
  {numero: '#  2',anexo:'',fecha:''},
  {numero: '#  3',anexo:'',fecha:''},
  {numero: '#  4',anexo:'',fecha:''},
  {numero: '#  5',anexo:'',fecha:''},
]

export interface DocumentosAsociados{
  tipo:string;
  numero:string;
}

const ELEMENT_DATA_DOCUMENTOS_ASOCIADOS: DocumentosAsociados[] = [
  {tipo: 'tipo  1',numero:''},
  {tipo: 'tipo  2',numero:''},
  {tipo: 'tipo  3',numero:''},
  {tipo: 'tipo  4',numero:''},
  {tipo: 'tipo  5',numero:''},
]

export interface Notificaciones{
  tipo:string;
  oficio:string;
  fecha:string;
}

const ELEMENT_DATA_NOTIFICACIONES: Notificaciones[] = [
  {tipo: 'tipo  1',oficio:'',fecha:''},
  {tipo: 'tipo  2',oficio:'',fecha:''},
  {tipo: 'tipo  3',oficio:'',fecha:''},
  {tipo: 'tipo  4',oficio:'',fecha:''},
  {tipo: 'tipo  5',oficio:'',fecha:''},
]

@Component({
  selector: 'app-fichaevaluacion',
  templateUrl: './fichaevaluacion.component.html',
  styleUrls: ['./fichaevaluacion.component.css'],
  standalone: true,
  imports: [MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule,],
})
export class FichaEvaluacionComponent {

  constructor(private router: Router) {}

  displayedColumnsTramite: string[] = ['tramite','descripcion'];
  dataSourceTramite = new MatTableDataSource<Tramite>(ELEMENT_DATA_TRAMITE);

  displayedColumnsDetalleEvaluacion: string[] = ['tipoDetalle'];
  dataSourceDetalleEvaluacion= new MatTableDataSource<DetalleEvaluacion>(ELEMENT_DATA_DETALLE_EVALUACION);

  displayedColumnsRespuestaNotificaciones: string[] = ['numero','anexo','fecha'];
  dataSourceRespuestaNotificaciones= new MatTableDataSource<RespuestaNotificaciones>(ELEMENT_DATA_RESPUESTA_NOTIFICACIONES);

  displayedColumnsDocumentosAsociados: string[] = ['tipo','numero'];
  dataSourceDocumentosAsociados= new MatTableDataSource<DocumentosAsociados>(ELEMENT_DATA_DOCUMENTOS_ASOCIADOS);

  displayedColumnsNotificaciones: string[] = ['tipo','oficio','fecha'];
  dataSourceNotificaciones= new MatTableDataSource<Notificaciones>(ELEMENT_DATA_NOTIFICACIONES);



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {

  }

  singlePaymentTipoProd() {

   }

   singlePayment() {

  }

}
