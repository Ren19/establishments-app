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
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCheckboxChange} from '@angular/material/checkbox';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';


export interface Varios {
  tpccodigo: string;
  tpcdescrip: string;
}

const datosVarios: Varios[] = [
  {tpccodigo: '', tpcdescrip: ''},
  {tpccodigo: '', tpcdescrip: ''},
  {tpccodigo: '', tpcdescrip: ''},
];



@Component({
  selector: 'app-buscarseleccionarvarios01a2',
  templateUrl: './buscarseleccionarvarios01a2.component.html',
  styleUrls: ['./buscarseleccionarvarios01a2.component.css'],
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




export class Buscarseleccionarvarios01a2Component implements OnInit {

  //dataSourceVarios = new MatTableDataSource<Varios>;
  constructor(private router: Router,
              public dialog: MatDialogRef<Buscarseleccionarvarios01a2Component>,
              private service:PostService,) {

    //this.dataSourceVarios = new MatTableDataSource(datosVarios);

    console.log('CboDGTipo>>>:', sessionStorage.getItem('CboDGTipo'));

    this.buscarClick();

  }

  allComplete: boolean = false;


  clickedRowsVarios = new Set<Varios>();
  displayedColumnsVarios: string[] = ['tpccodigo', 'tpcdescrip'];

  dataSourceVarios = new MatTableDataSource<Varios>(datosVarios);
  selection = new SelectionModel<Varios>(true, []);


  selectedItemIdx!:Varios;
  checked:boolean=true;
  expresion!:string;

  ngOnInit(): void {

  }

  someComplete(): boolean {
   return false;
  }
  setAll(completed: boolean) {
  }

  updateCheck() {

  }


  buscarClick(): void {

    let req={
     "cOpcion":"02",
     "cMostrar":"1",
     "cParam1":"",
     "cParam2":"",
     "cParam3":"",
     "cParam4":"",
     "cParam5":""
    }


    this.service.getCargarBusquedas2(req).subscribe(response => {
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

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceVarios.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSourceVarios.data.forEach(row => this.selection.select(row));
  }

}



