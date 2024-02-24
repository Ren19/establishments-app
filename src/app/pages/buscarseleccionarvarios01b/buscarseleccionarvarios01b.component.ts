import { Component,ViewChild,OnInit,AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {PostService} from '../../services/post.service';
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


export interface Varios {
  idclasificador: string;
  grpcodigo: string;
  sgpdescrip: string;
  grpdescrip: string;
  tcpdescrip: string;
  stcpdescrip: string;
}



const datosVarios: Varios[] = [
  {idclasificador: '-', grpcodigo: '-', sgpdescrip: '-', grpdescrip: '-', tcpdescrip: '-',stcpdescrip: '-'},
  {idclasificador: '-', grpcodigo: '-', sgpdescrip: '-', grpdescrip: '-', tcpdescrip: '-',stcpdescrip: '-'},
  {idclasificador: '-', grpcodigo: '-', sgpdescrip: '-',grpdescrip: '-',tcpdescrip: '-',stcpdescrip: '-'},
];









@Component({
  selector: 'app-buscarseleccionarvarios01b',
  templateUrl: './buscarseleccionarvarios01b.component.html',
  styleUrls: ['./buscarseleccionarvarios01b.component.css'],
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




export class Buscarseleccionarvarios01bComponent implements OnInit {

  //dataSourceVarios = new MatTableDataSource<Varios>;
  constructor(private router: Router,
              public dialog: MatDialogRef<Buscarseleccionarvarios01bComponent>,
              private service:PostService,) {

    //this.dataSourceVarios = new MatTableDataSource(datosVarios);

    this.buscarClick();
  }


  checked:boolean=true;

  clickedRowsVarios = new Set<Varios>();
  displayedColumnsVarios: string[] = ['idclasificador','tcpdescrip', 'stcpdescrip', 'grpdescrip'];

  dataSourceVarios = new MatTableDataSource<Varios>(datosVarios);

  selectedItemIdx!:Varios;

  ngOnInit(): void {

  }

  buscarClick(): void {

    let req={
     "cOpcion":"30",
     "cMostrar":"1",
     "cParam1":"",
     "cParam2":"",
     "cParam3":"",
     "cParam4":"",
     "cParam5":""
    }


    this.service.getCargarBusquedas3(req).subscribe(response => {
      this.dataSourceVarios.data = response;
     });

     if (this.dataSourceVarios.paginator) {
      this.dataSourceVarios.paginator.firstPage();
    }


  }

  clickPersonal(row:Varios) {
    this.selectedItemIdx = row;
    console.log('selectedItemIdx:', this.selectedItemIdx);
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



