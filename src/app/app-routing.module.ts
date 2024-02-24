import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { ActividadesComponent } from './pages/actividades/actividades.component';
import { AlmacenesplantasComponent } from './pages/almacenesplantas/almacenesplantas.component';
import { DatosestablecimientosComponent } from './pages/datosestablecimientos/datosestablecimientos.component';
import { OtrosComponent } from './pages/otros/otros.component';
import { DatosgeneralesComponent } from './pages/datosgenerales/datosgenerales.component';
import { RegistroestablecimientoComponent } from './pages/registroestablecimiento/registroestablecimiento.component';
import { DocumentoResolucionComponent } from './pages/documentoresolucion/documentoresolucion.component';
import { FichaEvaluacionComponent } from './pages/fichaevaluacion/fichaevaluacion.component';

const app_routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'actividades', component: ActividadesComponent},
  {path: 'registroestable', component: RegistroestablecimientoComponent},
  {path: 'almacenesplantas', component: AlmacenesplantasComponent},
  {path: 'datosestablecimientos', component: DatosestablecimientosComponent},
  {path: 'otros', component: OtrosComponent},
  {path: 'datosgenerales', component: DatosgeneralesComponent},
  {path: 'documentoresolucion', component: DocumentoResolucionComponent},
  {path: 'fichaevaluacion', component: FichaEvaluacionComponent},
];

export const app_routing = RouterModule.forRoot(app_routes);
