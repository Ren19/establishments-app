import { Component, Inject,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import {DataSource} from '@angular/cdk/collections';
import {CdkTableModule} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';


import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import {MatPaginator} from '@angular/material/paginator';

import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export interface DialogData {
  animal: string;
  name: string;
}

export interface AlmacenPlantas{
  tipo: string;
  condUso: String;
  talCodigoSec: String;
  item:String;
  propietario:string;
  fecIniAct:string;
  nombre:string;
  TxtALALFecFinAct:string;
  TxtALALDireccion:string;
  TxtALALDirNro:string;
  TxtALALDirUrbanizacion:string;
  TxtALALDirIntMzLote:string;
  TxtALALUbigeo:string;
  TxtALALLongitud:string;
  TxtALALLatitud:string;
  TxtALALHorario:string;
  TxtALALTelef1:string;
}

export interface DialogData {
  animal: string;
  name: string;
}




export interface area {
  numero: string;
  clasificacion: string;
  subclasificacion: string;
  grupo: string;
  subgrupo: string;
  tipoproducto: string;
  areanivelriesgo: string;
  esterilidad: string;
}

const ELEMENT_DATA2: area[] = [
  {numero: '1', clasificacion: 'nom1',subclasificacion: '', grupo: '',subgrupo: '1', tipoproducto: 'nom1',areanivelriesgo: '', esterilidad: ''},
  {numero: '2', clasificacion: 'nom2',subclasificacion: '', grupo: '',subgrupo: '1', tipoproducto: 'nom1',areanivelriesgo: '', esterilidad: ''},
  {numero: '3', clasificacion: 'nom3',subclasificacion: '', grupo: '',subgrupo: '1', tipoproducto: 'nom1',areanivelriesgo: '', esterilidad: ''},
  {numero: '4', clasificacion: 'nom4',subclasificacion: '', grupo: '',subgrupo: '1', tipoproducto: 'nom1',areanivelriesgo: '', esterilidad: ''},
  {numero: '5', clasificacion: 'nom5',subclasificacion: '', grupo: '',subgrupo: '1', tipoproducto: 'nom1',areanivelriesgo: '', esterilidad: ''},
  {numero: '6', clasificacion: 'nom6',subclasificacion: '', grupo: '',subgrupo: '1', tipoproducto: 'nom1',areanivelriesgo: '', esterilidad: ''},
  {numero: '7', clasificacion: 'nom7',subclasificacion: '', grupo: '',subgrupo: '1', tipoproducto: 'nom1',areanivelriesgo: '', esterilidad: ''},
];


export interface almacen {
  numero: string;
  nombre: string;
  tipo: string;
  constancia: string;
}

const ELEMENT_DATA1: almacen[] = [
  {numero: '1', nombre: 'nom1',tipo: '', constancia: ''},
  {numero: '2', nombre: 'nom2',tipo: '', constancia: ''},
  {numero: '3', nombre: 'nom3',tipo: '', constancia: ''},
  {numero: '4', nombre: 'nom4',tipo: '', constancia: ''},
  {numero: '5', nombre: 'nom5',tipo: '', constancia: ''},
  {numero: '6', nombre: 'nom6',tipo: '', constancia: ''},
  {numero: '7', nombre: 'nom7',tipo: '', constancia: ''},
];

export interface Personal {
  nombre: string;
  cargo: string;
}

const ELEMENT_DATA_PERSONAL: Personal[] = [
  {nombre: '1', cargo: 'nom1'},
  {nombre: '2', cargo: 'nom2'},
  {nombre: '3', cargo: 'nom3'},
  {nombre: '4', cargo: 'nom4'},
  {nombre: '5', cargo: 'nom5'},
  {nombre: '6', cargo: 'nom6'},
  {nombre: '7', cargo: 'nom7'},
];

export interface Horario {
  dia: string;
  horario: string;
}

const ELEMENT_DATA_HORARIO: Horario[] = [
  {dia: '1', horario: 'nom1'},
  {dia: '2', horario: 'nom2'},
  {dia: '3', horario: 'nom3'},
  {dia: '4', horario: 'nom4'},
  {dia: '5', horario: 'nom5'},
  {dia: '6', horario: 'nom6'},
  {dia: '7', horario: 'nom7'},
];

export interface Horariodetalle {
  detalle: string;
}

const ELEMENT_DATA_HORARIO_DETALLE: Horariodetalle[] = [
  {detalle: '1'},
  {detalle: '2'},
  {detalle: '3'},
  {detalle: '4'},
  {detalle: '5'},
  {detalle: '6'},
  {detalle: '7'},
];


export interface Activiades {
  detalle: string;
}

const ELEMENT_DATA_ACTIVIADES: Activiades[] = [
  {detalle: 'Activiasdes 1'},
  {detalle: 'Activiasdes 2'},
  {detalle: 'Activiasdes 3'},
  {detalle: 'Activiasdes 4'},
  {detalle: 'Activiasdes 5'},
  {detalle: 'Activiasdes 6'},
  {detalle: 'Activiasdes 7'},
];

export interface FormaFarmaceutica {
  detalle: string;
}

const ELEMENT_DATA_FORMA_FARMACEUTICA: FormaFarmaceutica[] = [
  {detalle: 'Forma Farmaceutica 1'},
  {detalle: 'Forma Farmaceutica 2'},
  {detalle: 'Forma Farmaceutica 3'},
  {detalle: 'Forma Farmaceutica 4'},
  {detalle: 'Forma Farmaceutica 5'},
  {detalle: 'Forma Farmaceutica 6'},
  {detalle: 'Forma Farmaceutica  7'},
];

export interface FormaCosmetica {
  detalle: string;
}

const ELEMENT_DATA_FORMA_COSMETICA: FormaCosmetica[] = [
  {detalle: 'Forma Cosmetica 1'},
  {detalle: 'Forma Cosmetica 2'},
  {detalle: 'Forma Cosmetica 3'},
  {detalle: 'Forma Cosmetica 4'},
  {detalle: 'Forma Cosmetica 5'},
  {detalle: 'Forma Cosmetica 6'},
  {detalle: 'Forma Cosmetica 7'},
];

export interface TipoProducto {
  detalle: string;
}

const ELEMENT_DATA_TIPO_PRODUCTO: TipoProducto[] = [
  {detalle: 'Tipo producto 1'},
  {detalle: 'Tipo producto 2'},
  {detalle: 'Tipo producto 3'},
  {detalle: 'Tipo producto 4'},
  {detalle: 'Tipo producto 5'},
  {detalle: 'Tipo producto 6'},
  {detalle: 'Tipo producto 7'},
];


@Component({
  selector: 'app-almacenesplantas',
  templateUrl: './almacenesplantas.component.html',
  styleUrls: ['./almacenesplantas.component.css'],
  standalone: true,
  imports: [MatTabsModule,
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatButtonModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule],
})


export class AlmacenesplantasComponent implements AfterViewInit {

  isAddAlmacenesPlantas:boolean=false;
  isEditAlmacenesPlantas:boolean=true;
  isDeleteAlmacenesPlantas:boolean=true;
  isSaveAlmacenesPlantas:boolean=true;

  CboALALTipo!: string;
  CboALALCondUso!: String;
  CboALALTalCodigoSec!: String;
  TxtALALItem!:String;
  TxtALPropietario!:string;
  TxtALALFecIniAct!:string;
  TxtALALNombre!:string;
  TxtALALFecFinAct!:string;
  TxtALALDireccion!:string;
  TxtALALDirNro!:string;
  TxtALALDirUrbanizacion!:string;
  TxtALALDirIntMzLote!:string;
  TxtALALUbigeo!:string;
  TxtALALLongitud!:string;
  TxtALALLatitud!:string;
  TxtALALHorario!:string;
  TxtALALTelef1!:string;

  isCboALALTipo:boolean=true;
  isCboALALCondUso:boolean=true;
  isCboALALTalCodigoSec:boolean=true;
  isTxtALALItem:boolean=true;
  isTxtALPropietario:boolean=true;
  isTxtALALFecIniAct:boolean=true;
  isTxtALALNombre:boolean=true;
  isTxtALALFecFinAct:boolean=true;
  isTxtALALDireccion:boolean=true;
  isTxtALALDirNro:boolean=true;
  isTxtALALDirUrbanizacion:boolean=true;
  isTxtALALDirIntMzLote:boolean=true;
  isTxtALALUbigeo:boolean=true;
  isTxtALALLongitud:boolean=true;
  isTxtALALLatitud:boolean=true;
  isTxtALALHorario:boolean=true;
  isTxtALALTelef1:boolean=true;



  TxtALARItem!:string;
  TxtALARLiteral!:string;
  TxtALARDescrip!:string;
  TxtALARSubtipo!:string;
  TxtALARGrupo!:string;
  TxtALARSubgrupo!:string;
  TxtALARTipoprod!:string;
  TxtALAREstFisFab!:string;
  TxtALAREsterilidad!:string;
  CboALALFormaObt!:string;

  isAddArea:boolean=true;
  isEditArea:boolean=true;
  isDeleteArea:boolean=true;
  isSaveArea:boolean=true;

  isTxtALARItem:boolean=true;
  isTxtALARLiteral:boolean=true;
  isTxtALARDescrip:boolean=true;
  isTxtALARSubtipo:boolean=true;
  isTxtALARGrupo:boolean=true;
  isTxtALARSubgrupo:boolean=true;
  isTxtALARTipoprod:boolean=true;
  isTxtALAREstFisFab:boolean=true;
  isTxtALAREsterilidad:boolean=true;
  isCboALALFormaObt:boolean=true;

  botonAddAlmacenesPlantasStyle:string="bnt01";
  botonEditAlmacenesPlantasStyle:string="";
  botonDeleteAlmacenesPlantasStyle:string="";
  botonSaveAlmacenesPlantasStyle:string="";

  botonAreaStyle:string="";//bnt01

  constructor(private router: Router,public dialog: MatDialog) {



  }

  selectedItemIdxAlmacen!:almacen;
  selectedItemIdxAreas!:area;


  displayedColumns: string[] = ['numero','nombre','tipo','constancia'];
  dataSource = new MatTableDataSource<almacen>(ELEMENT_DATA1);

  displayedColumns2: string[] = ['numero', 'clasificacion', 'subclasificacion', 'grupo','subgrupo', 'tipoproducto', 'areanivelriesgo', 'esterilidad'];
  dataSource2 = new MatTableDataSource<area>(ELEMENT_DATA2);

  displayedColumnsPersonal: string[] = ['nombre', 'cargo'];
  dataSourcePersonal = new MatTableDataSource<Personal>(ELEMENT_DATA_PERSONAL);

  displayedColumnsHorario: string[] = ['dia', 'horario'];
  dataSourceHorario = new MatTableDataSource<Horario>(ELEMENT_DATA_HORARIO);

  displayedColumnsDetalle: string[] = ['detalle'];
  dataSourceDetalle = new MatTableDataSource<Horariodetalle>(ELEMENT_DATA_HORARIO_DETALLE);


  displayedColumnsActiviades: string[] = ['detalle'];
  dataSourceActiviades = new MatTableDataSource<Activiades>(ELEMENT_DATA_ACTIVIADES);


  displayedColumnsFormaFarmaceutica: string[] = ['detalle'];
  dataSourceFormaFarmaceutica = new MatTableDataSource<FormaFarmaceutica>(ELEMENT_DATA_FORMA_FARMACEUTICA);


  displayedColumnsFormaCosmetica: string[] = ['detalle'];
  dataSourceFormaCosmetica = new MatTableDataSource<FormaCosmetica>(ELEMENT_DATA_FORMA_COSMETICA);


  displayedColumnsTipoProducto: string[] = ['detalle'];
  dataSourceTipoProducto = new MatTableDataSource<TipoProducto>(ELEMENT_DATA_TIPO_PRODUCTO);


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  @ViewChild(MatSort) sort2!: MatSort;


  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if(this.dataSource != undefined){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    if(this.dataSource2 != undefined){
      this.dataSource2.paginator = this.paginator2;
      this.dataSource2.sort = this.sort2;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlmacenesplantasComponentDialog, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed111:'+result);

    });


   /* dialogRef.afterClosed().subscribe(result => {
      console.log(result);
       if (result === 'submit') {
         }
});*/


  }

  singlePayment(row:almacen) {
    this.selectedItemIdxAlmacen = row;
    console.log('selectedItemIdxAlmacen:', this.selectedItemIdxAlmacen);

  }

  singlePayment2(row:area) {
    this.selectedItemIdxAreas = row;
    console.log('selectedItemIdxAreas:', this.selectedItemIdxAreas);

  }

  add() {
    this.botonAddAlmacenesPlantasStyle="";
    this.botonEditAlmacenesPlantasStyle="bnt01";
    this.botonDeleteAlmacenesPlantasStyle="bnt01";
    this.botonSaveAlmacenesPlantasStyle="bnt01";

    this.isAddAlmacenesPlantas=true;
    this.isEditAlmacenesPlantas=false;
    this.isDeleteAlmacenesPlantas=false;
    this.isSaveAlmacenesPlantas=false;

    this.CboALALTipo="";
    this.CboALALCondUso="";
    this.CboALALTalCodigoSec="";
    this.TxtALALItem="";
    this.TxtALPropietario="";
    this.TxtALALFecIniAct="";
    this.TxtALALNombre="";
    this.TxtALALFecFinAct="";
    this.TxtALALDireccion="";
    this.TxtALALDirNro="";
    this.TxtALALDirUrbanizacion="";
    this.TxtALALDirIntMzLote="";
    this.TxtALALUbigeo="";
    this.TxtALALLongitud="";
    this.TxtALALLatitud="";
    this.TxtALALHorario="";
    this.TxtALALTelef1="";

    this.isCboALALTipo=false;
    this.isCboALALCondUso=false;
    this.isCboALALTalCodigoSec=false;
    this.isTxtALALItem=false;
    this.isTxtALPropietario=false;
    this.isTxtALALFecIniAct=false;
    this.isTxtALALNombre=false;
    this.isTxtALALFecFinAct=false;
    this.isTxtALALDireccion=false;
    this.isTxtALALDirNro=false;
    this.isTxtALALDirUrbanizacion=false;
    this.isTxtALALDirIntMzLote=false;
    this.isTxtALALUbigeo=false;
    this.isTxtALALLongitud=false;
    this.isTxtALALLatitud=false;
    this.isTxtALALHorario=false;
    this.isTxtALALTelef1=false;



  }

  edit(){
    this.botonAddAlmacenesPlantasStyle="bnt01";
    this.botonEditAlmacenesPlantasStyle="";
    this.botonDeleteAlmacenesPlantasStyle="";
    this.botonSaveAlmacenesPlantasStyle="bnt01";

    this.isAddAlmacenesPlantas=false;
    this.isEditAlmacenesPlantas=true;
    this.isDeleteAlmacenesPlantas=true;
    this.isSaveAlmacenesPlantas=false;
  }

  delete(){
    this.botonAddAlmacenesPlantasStyle="bnt01";
    this.botonEditAlmacenesPlantasStyle="";
    this.botonDeleteAlmacenesPlantasStyle="";
    this.botonSaveAlmacenesPlantasStyle="";

    this.isAddAlmacenesPlantas=false;
    this.isEditAlmacenesPlantas=true;
    this.isDeleteAlmacenesPlantas=true;
    this.isSaveAlmacenesPlantas=true;
  }

  save(){
    this.botonAddAlmacenesPlantasStyle="bnt01";
    this.botonEditAlmacenesPlantasStyle="";
    this.botonDeleteAlmacenesPlantasStyle="";
    this.botonSaveAlmacenesPlantasStyle="";

    this.isAddAlmacenesPlantas=false;
    this.isEditAlmacenesPlantas=true;
    this.isDeleteAlmacenesPlantas=true;
    this.isSaveAlmacenesPlantas=true;

    this.isCboALALTipo=true;
    this.isCboALALCondUso=true;
    this.isCboALALTalCodigoSec=true;
    this.isTxtALALItem=true;
    this.isTxtALPropietario=true;
    this.isTxtALALFecIniAct=true;
    this.isTxtALALNombre=true;
    this.isTxtALALFecFinAct=true;
    this.isTxtALALDireccion=true;
    this.isTxtALALDirNro=true;
    this.isTxtALALDirUrbanizacion=true;
    this.isTxtALALDirIntMzLote=true;
    this.isTxtALALUbigeo=true;
    this.isTxtALALLongitud=true;
    this.isTxtALALLatitud=true;
    this.isTxtALALHorario=true;
    this.isTxtALALTelef1=true;

   // sessionStorage.setItem('email', this.email);
  }

  public confirmDialog(): void {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('The dialog was closed111:'+result);

    });
}



}




@Component({
  selector: 'almacenesplantas.component-dialog',
  templateUrl: 'almacenesplantas.component-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    //MatDialogTitle,
    //MatDialogContent,
    //MatDialogActions,
    //MatDialogClose,
  ],
})
export class AlmacenesplantasComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<AlmacenesplantasComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }



  onNoClick2(value:any): void {


    this.data.animal=value;
    console.log('The dialog was closed222:'+value);
    this.dialogRef.close();
  }



}
