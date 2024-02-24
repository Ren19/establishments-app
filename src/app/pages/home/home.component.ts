import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {CommonModule} from '@angular/common';
import {LoginComponent} from '../../login/login.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';


/** @title Responsive sidenav */

interface MenuOpcion {
  name: string;
  children?: MenuOpcion[];
  url?: string;
}

const TREE_DATA: MenuOpcion[] = [
  {
    name: "Caja=#",
    children: []
  },
  {
    name: "Archivo=#",
    children: []
  },
  {
    name: "Gestión de la Calidad=#",
    children: []
  },
    {
    name: 'Establecimientos Farmacéuticos',
    children: [
      {
        name: 'Solicitudes',
        children: [{name: 'Registro de Establecimiento=http://localhost:4200/registroestable'},
         {name: 'Modificaciones, Cambios o Ampliaciones=#'},
         {name: 'Traslado de Establecimiento=#'},
         {name: 'Cierre de Establecimiento=#'},
         {name: 'ReInicio de Actividades=#'},
         {name: 'Levantamiento de Establecimiento=#'},
         {name: 'Contrato de Fabricación=#'},
         {name: 'Asume/Renuncia Regencia=#'}]
      },
      {
        name: 'Registro',
        children: [{name: 'Establecimiento=#'},
                   {name: 'Director Técnico=#'},
                   {name: 'Representante Legal=#'},
                   {name: 'Entidad=#'},
                   {name: 'Tramite de Establecimiento=#'},
                   {name: 'Empresas Extranjeras=#'},
                   {name: 'Establecimiento - Disas - Provincia=#'},
                   {name: 'Establecimientos No Registrados=#'},
                   {name: 'Empresas Autorización Excepcional=#'}]
      },{
        name: 'Procesos',
        children: [{name: 'Ficha de Evaluación - Establecimiento=http://localhost:4200/fichaevaluacion'},
                   {name: 'Cambios, Modificaciones y Ampliaciones=#'},
                   {name: 'Traslado de Establecimiento=#'},
                   {name: 'Cierre de Establecimiento - Solicitud=#'},
                   {name: 'ReInicio de Actividades de Establecimiento=#'},
                   {name: 'Levantamiento de Establecimiento=#'},
                   {name: 'Asume/Renuncia Regencia=#'},
                   {name: 'Contrato de Fabricación=#'}]
      },
      {
        name: 'Documentos',
        children: [{name: 'Resoluciones Directorales=http://localhost:4200/documentoresolucion'},
                   {name: 'Monitoreo de Solicitudes/Registro de Firma=#'}],
      },      {
        name: 'Consultas',
        children: [{name: 'Consulta de Establecimientos=#'},
                   {name: 'Consulta de Directores Técnicos=#'},
                   {name: 'Consulta de Contratos de Fabricación=#'},
                   {name: 'Consulta de Representantes Legales=#'},
                   {name: 'Estadísticas e Indicadores=#'},
                   {name: 'Reporte de Establecimientos Regiones=#'}]
      }
    ],
  },
    {
    name: 'Productos Controlados=#',
    children: []
  },
    {
    name: 'Registro de Productos Farmaceuticos y Afines=#',
    children: []
  },
    {
    name: 'Trámite Documentario=#',
    children: []
  },
    {
    name: 'Vigilancia=#',
    children: []
  },
    {
    name: 'Dispositivos Médicos=#',
    children: []
  },
    {
    name: 'Comunicaciones=#',
    children: []
  },
    {
    name: 'Administración del Sistema=#',
    children: []
  },
];


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MatTabsModule,
            MatToolbarModule,
            MatButtonModule,
            MatIconModule,
            MatSidenavModule,
            MatListModule,
            MatTreeModule,
            MatButtonModule,
            MatIconModule,
            CommonModule],
})
export class HomeComponent implements OnDestroy {
  panelOpenState = false;
  mobileQuery: MediaQueryList;

  usuario?: string;
  password?: string;




  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public dialog: MatDialog,) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.dataSource.data = TREE_DATA;


  }



  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


  private _transformer = (node: MenuOpcion, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level
    };
  };



  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  setURL(URL:any): void {
    console.log('RESULTADO CLICK::'+URL);


    var algunArticulo2 = TREE_DATA.find(function (articulo) {
      return (articulo.name = URL)
    })
    console.log(algunArticulo2)





  }





  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {usuario: this.usuario, password: this.password},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.usuario = result.usuario;
      this.password = result.password;
      console.log('The dialog was closed:'+this.usuario);
      console.log('The dialog was closed:'+this.password);
    });
  }


}


