import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { DatosgeneralesComponent } from "../datosgenerales/datosgenerales.component";
import { DatosestablecimientosComponent } from "../datosestablecimientos/datosestablecimientos.component";
import { ActividadesComponent } from "../actividades/actividades.component";
import { AlmacenesplantasComponent } from "../almacenesplantas/almacenesplantas.component";
import { OtrosComponent } from "../otros/otros.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-registroestablecimiento',
    templateUrl: './registroestablecimiento.component.html',
    styleUrls: ['./registroestablecimiento.component.css'],
    standalone: true,
    imports: [MatTabsModule,MatIconModule, DatosgeneralesComponent, DatosestablecimientosComponent, ActividadesComponent, AlmacenesplantasComponent, OtrosComponent]
})


export class RegistroestablecimientoComponent {


  constructor() {}



}
