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
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatosgeneralesComponentDialog} from './datosgenerales.component-dialog';
import { CargarSolicitudEstablecimiento} from '../../models/CargarSolicitudEstablecimiento';

import { OtrosComponent } from '../otros/otros.component';

//const ELEMENT_DATA: PeriodicElement[] = [];



@Component({
  selector: 'app-datosgenerales',
  templateUrl: './datosgenerales.component.html',
  styleUrls: ['./datosgenerales.component.css'],
  standalone: true,
  imports: [MatTabsModule,
            MatGridListModule,
            MatCardModule,
            MatCardModule,
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatSidenavModule,
            MatSelectModule,
            MatButtonModule,
            CommonModule,
          ]
})

export class DatosgeneralesComponent implements OnInit {
  public selectedIndex = 0;
  posts:any;
  cbodgtipotramite:any= [];
  cboclasificacionestablecimiento: any= [];
  cbotipopersona: any= [];

  solcodigo:string='';
  solindipro:string='';
  expcodigo:string='';
  expfechreg:string='';
  soldocuref:string='';
  soldocufech:string='';
  solnumeins:string='';
  catabrevia:string='';
  soldescrip:string='';
  solnombcom:string='';
  solnumeruc:string='';
  tdtabreviasit:string='';
  soldireccion:string='';

  cargarSolicitudEstablecimiento!:CargarSolicitudEstablecimiento;


  //22027338
  dsacodigo="000";
  //expcodigo="";
  opetipo="XXXXXXXXXXXXX";


  @Input({ required: false })
  nomcomercial!: string;

  @Input({ required: false })
  ruc!:String;

  @Input({ required: false })
  razonsocial!:String;

  @Input({ required: false })
  numeroexpediente!:String;

  @Input({ required: false })
  fechaexpediente!:String;

  @Input({ required: false })
  secuenciaexpediente!:String;

  @Input({ required: false })
  anioexpediente!:String;


  @Input({ required: false })
  tipopersona!:String;

  @Input({ required: false })
  fechaRegistro!:String;

  @Input({ required: false })
  fechaExpediente!:String;


  constructor(private service:PostService,public dialog: MatDialog,private httpClient: HttpClient) {

    this.secuenciaexpediente="1";


    httpClient.get<any>("assets/json/cargarSolicitudEstablecimiento.json").subscribe(response => {

      this.cargarSolicitudEstablecimiento = response;

      });







  }



  ngOnInit() {


    this.service.getCbodgtipotramite().subscribe(response => {
       this.cbodgtipotramite = response;
      })


      this.service.getCboclasificacionestablecimiento().subscribe(response => {
        this.cboclasificacionestablecimiento = response;
       })

       this.service.getCbotipopersona().subscribe(response => {
        this.cbotipopersona = response;
       })


  }



  search(event:any){
		let value = event.target.value;
    this.expcodigo=this.anioexpediente+value;

    let req={
       "dsacodigo": this.dsacodigo,
      "expcodigo": this.expcodigo,
      "expnumesec": this.secuenciaexpediente,
      "opetipo": this.opetipo
    }

    this.service.getBuscarexpediente4(req).subscribe(response => {

      //this.nomcomercial=response.expnombcom;
      //this.ruc=response.utdnumedocidrem;
      //this.razonsocial=response.exprazonsoc;
      //this.numeroexpediente=response.expcodigo.substring(2);
      //this.anioexpediente=response.expcodigo.substring(0,2);
      //this.fechaexpediente=response.expfechreg;

      console.log('value0:'+response);

      //if(this.ruc!="" && this.ruc.substring(0,2)=="20"){
      //  this.tipopersona="J";
      //}else{
      //  this.tipopersona="N";
     // }


      console.log('value1:', response);
     });





	}


  clickNuevo(){

  }
  clickGuardar(){


    console.log('GlobalConstants.appEmail:', sessionStorage.getItem('email'));
  }

  getCboclasificacionestablecimiento() {

    sessionStorage.setItem('CboDGTipo',this.cargarSolicitudEstablecimiento.catcodigo);

  }


  clickAnular(){

  }

  clickBuscar(): void {

    console.log('BUSCAR>>>');

    const dialogRef = this.dialog.open(DatosgeneralesComponentDialog, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '95%',
      width: '95%',
      panelClass: 'full-screen-modal',
      data:{solcodigo: this.solcodigo,
            solindipro: this.solindipro,
            expcodigo: this.expcodigo,
            expfechreg: this.expfechreg,
            soldocuref: this.soldocuref,
            soldocufech: this.soldocufech,
            solnumeins: this.solnumeins,
            catabrevia: this.catabrevia,
            soldescrip: this.soldescrip,
            solnombcom: this.solnombcom,
            solnumeruc: this.solnumeruc,
            tdtabreviasit: this.tdtabreviasit,
            soldireccion: this.soldireccion},

    });

    dialogRef.afterClosed().subscribe(result => {

      this.razonsocial=result.soldescrip;
      this.ruc=result.solnumeruc;
      this.nomcomercial=result.solnombcom;

      console.log('value0:',result);

      let req={
        "lcCodDisa":"000",
        "lcNroSolicitud":result.solcodigo
      }



       this.service.getCargaSolicitud(req).subscribe(response => {

        this.cargarSolicitudEstablecimiento = response;

         this.numeroexpediente=response.expcodigo.substring(2);
         this.anioexpediente=response.expcodigo.substring(0,2);

         let tempFechaRegistro = new Date(this.cargarSolicitudEstablecimiento.expfechreg);
         let tempFechaExpediente= new Date(this.cargarSolicitudEstablecimiento.expfechreg);

         this.fechaRegistro = new DatePipe("en-US").transform(tempFechaRegistro, "yyyy-MM-dd")+"";
         this.fechaExpediente = new DatePipe("en-US").transform(tempFechaExpediente, "yyyy-MM-dd")+"";

         console.log('this.cargarSolicitudEstablecimiento:',this.cargarSolicitudEstablecimiento );

        });



    });



  }








}
