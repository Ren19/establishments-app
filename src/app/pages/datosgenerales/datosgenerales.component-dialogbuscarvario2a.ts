import { Component, Input, OnInit, ViewChild, Inject} from '@angular/core';
import {PostService} from '../../services/post.service';
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




export class User {
  id?: any;
  firstName?: string;
  lastName?: string;
  email?: string;
  dateOfBirth?: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},

];



@Component({
  selector: 'datosgenerales.component-dialogbuscarvario2a',
  templateUrl: 'datosgenerales.component-dialogbuscarvario2a.html',
  styleUrls: ['./datosgenerales.component.css'],
  standalone: true,
  imports: [
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
export class DatosgeneralesComponentDialogBuscarVarios2a implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DatosgeneralesComponentDialogBuscarVarios2a>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service:PostService
  ) {}

  clickedRows = new Set<PeriodicElement>();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
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
  //expbuscar="%2%";
  selectedItemIdx!:PeriodicElement;



   ngOnInit(): void {

    let req={
      "opetipo":this.opetipo,
      "dsacodigo":this.dsacodigo,
      "solnumeins":this.solnumeins,
      "tipobusqueda":this.tipobusqueda,
      "expbuscar":"%"+this.expbuscar+"%"
    }


    this.service.getBuscarsolicitudestablecimiento3(req).subscribe(response => {

      this.dataSource.data = response;

      console.log('value1:', response);

     });


  }

  ngAfterViewInit() {
    if(this.dataSource != undefined){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }


  onNoClick(): void {
    this.dialogRef.close();
  }


  buscarClick(): void {


    let req={
     "opetipo":this.opetipo,
     "dsacodigo":this.dsacodigo,
     "solnumeins":this.solnumeins,
     "tipobusqueda":this.tipobusqueda,
     "expbuscar":"%"+this.expbuscar+"%"
   }

    this.service.getBuscarsolicitudestablecimiento3(req).subscribe(response => {

      //this.ELEMENT_DATA=response;
      this.dataSource.data = response;
      console.log('value1:', response);

     });

     if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }


  }




  onNoClick2(value:any): void {


    this.data.animal=value;
    console.log('The dialog was closed222:'+value);
    this.dialogRef.close();
  }

  singlePayment(row:PeriodicElement) {
    this.selectedItemIdx = row;
    console.log('selectedItemIdx:', this.selectedItemIdx);
  }




}
