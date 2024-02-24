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


export interface Documento{
  nrointerno:string;
  descripcion:string;
  nrodocumento:string;
  fecha:string;
  impresiones:string;
  transcrip:string;
}

const ELEMENT_DATA_DOCUMENTOS: Documento[] = [
  {nrointerno: 'nrointerno 1',descripcion:'',nrodocumento:'',fecha:'',impresiones:'',transcrip:''},
  {nrointerno: 'nrointerno 2',descripcion:'',nrodocumento:'',fecha:'',impresiones:'',transcrip:''},
  {nrointerno: 'nrointerno 3',descripcion:'',nrodocumento:'',fecha:'',impresiones:'',transcrip:''},
  {nrointerno: 'nrointerno 4',descripcion:'',nrodocumento:'',fecha:'',impresiones:'',transcrip:''},
  {nrointerno: 'nrointerno 5',descripcion:'',nrodocumento:'',fecha:'',impresiones:'',transcrip:''},
]

@Component({
  selector: 'app-documentoresolucion',
  templateUrl: './documentoresolucion.component.html',
  styleUrls: ['./documentoresolucion.component.css'],
  standalone: true,
  imports: [MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule,],
})
export class DocumentoResolucionComponent implements OnInit  {

  constructor(private router: Router) {}

  displayedColumnsDocumentos: string[] = ['nrointerno','descripcion','nrodocumento','fecha','impresiones','transcrip'];
  dataSourceDocumentos = new MatTableDataSource<Documento>(ELEMENT_DATA_DOCUMENTOS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {

  }

  singlePaymentTipoProd() {
    // this.selectedItemIdx = row;
    // console.log('selectedItemIdx:', this.selectedItemIdx);
   }

}
