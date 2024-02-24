import { Component, Input, AfterViewInit, ViewChild, Inject} from '@angular/core';
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
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatosgeneralesComponentDialogEstablecimiento } from './datosgenerales.component-dialogestablecimientos';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

export interface DatosSolicitud {
  solcodigo  :   string,
  solindipro  :   string,
  expcodigo  :   string,
  expfechreg  :   string,
  soldocuref  :   string,
  soldocufech  :   string,
  solnumeins  :   string,
  catabrevia  :  string,
  soldescrip  :   string,
  solnombcom  :   string,
  solnumeruc  :   string,
  tdtabreviasit  :   string,
  soldireccion  :  string
}



const ELEMENT_DATA: DatosSolicitud[] = [
  /*{
    "solnumeins": "0110614",
    "expcodigo": "23000135            ",
    "expfechreg": "2023-01-03 00:00:00.0",
    "solcodigo": "23000222",
    "soldocuref": "000103",
    "solindipro": "I",
    "soldocufech": "2023-01-10 00:00:00.0",
    "catabrevia": "DRG",
    "soldescrip": "GRUPO ABBOMED S.A.C.",
    "tdtabreviasit": "A",
    "solnumeruc": "20602607861",
    "soldireccion": "CALLE FRANCISCO SANCHEZ DE PAGADOR 174 INT.201 SANTA FLORENCIA",
    "solnombcom": "ABBO GROUP"
},
{
    "solnumeins": "0039569",
    "expcodigo": "22104880            ",
    "expfechreg": "2022-09-16 00:00:00.0",
    "solcodigo": "22010222",
    "soldocuref": "",
    "solindipro": "I",
    "soldocufech": '',
    "catabrevia": "DRG",
    "soldescrip": "MSN LABS PERU S.A.C.",
    "tdtabreviasit": "A",
    "solnumeruc": "20602837549",
    "soldireccion": "CALLE AMADOR MERINO REYNA N° 465 OF.302 A - SAN ISIDRO",
    "solnombcom": "MSN LABS PERU"
}*/

];

@Component({
  selector: 'datosgenerales.component-dialog',
  templateUrl: './datosgenerales.component-dialog.html',
  styleUrls: ['./datosgenerales.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule
  ],
})
export class DatosgeneralesComponentDialog implements AfterViewInit {

  dataSolicitud!: FormGroup;


  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<DatosgeneralesComponentDialog>,
              @Inject(MAT_DIALOG_DATA) public data: DatosSolicitud,
              private service:PostService,
              public dialog: MatDialog
  ) {}




  visible:boolean=true;
  selectedTipoBusqueda: any=1;

  fileNameDialogRef!: MatDialogRef<DatosgeneralesComponentDialogEstablecimiento>;

  clickedRows = new Set<DatosSolicitud>();
  displayedColumns: string[] = ['solcodigo', 'solindipro', 'expcodigo', 'expfechreg', 'soldocuref', 'soldocufech', 'solnumeins', 'catabrevia', 'soldescrip','solnombcom', 'solnumeruc', 'tdtabreviasit', 'soldireccion'];
  dataSource = new MatTableDataSource<DatosSolicitud>(ELEMENT_DATA);



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input({ required: false })
  txtEstablec:String='';

  @Input({ required: false })
  numeroexpediente:String='';

  @Input({ required: false })
  expbuscar:String='';

  @Input({ required: false })
  anioexpediente:String='23';


  selectedItemIdx!:DatosSolicitud;

  opetipo="18";
  dsacodigo="000";


  ngAfterViewInit() {
    if(this.dataSource != undefined){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    this.dataSolicitud = this.formBuilder.group({
      solcodigo: ['', Validators.required],
      solindipro: ['', Validators.required],
      expcodigo: ['', Validators.required],
      expfechreg: ['', Validators.required],
      soldocuref: ['', Validators.required],
      soldocufech: ['', Validators.required],
      solnumeins: ['', Validators.required],
      catabrevia: ['', Validators.required],
      soldescrip: ['', Validators.required],
      solnombcom: ['', Validators.required],
      solnumeruc: ['', Validators.required],
      tdtabreviasit: ['', Validators.required],
      soldireccion: ['', Validators.required]
    });




  }


  singlePayment2() {

  }

  getValTipoBusqueda() {
    console.log('unoooo:'+this.selectedTipoBusqueda); // returns selected object

    if (this.selectedTipoBusqueda==1){
      this.visible=true;
    }else {
      this.visible=false;
    }


  }

/*
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

  }*/




  onNoClick(): void {
    this.dialogRef.close();
  }


  buscarClick(): void {

    let req={
     "opetipo":this.opetipo,
     "dsacodigo":this.dsacodigo,
     "solnumeins":(this.txtEstablec!='')?this.txtEstablec:'%',
     "tipobusqueda":this.selectedTipoBusqueda,
     "expbuscar":(this.selectedTipoBusqueda==1)?( this.anioexpediente+ "%" + this.numeroexpediente + "%"):("%" + this.expbuscar +  "%" )
   }
   console.log('opetipo:', this.opetipo);
   console.log('dsacodigo:', this.dsacodigo);
   console.log('solnumeins:', ((this.txtEstablec!='')?this.txtEstablec:'%'));
   console.log('tipobusqueda:', this.selectedTipoBusqueda);
   console.log('expbuscar:', ((this.selectedTipoBusqueda==1)?( this.anioexpediente+ "%" + this.numeroexpediente + "%"):("%" + this.expbuscar +  "%" )));

    this.service.getBuscarsolicitudestablecimiento3(req).subscribe(response => {
      this.dataSource.data = response;
     });

     if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }


  }


  singlePayment(row:DatosSolicitud) {
    this.data = row;
  }



  onNoClick2(): void {
    this.dialogRef.close(this.data);
  }


  clickBuscar(): void {

    this.fileNameDialogRef = this.dialog.open(DatosgeneralesComponentDialogEstablecimiento);

    this.fileNameDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed111:'+result);
    });


  }

}
