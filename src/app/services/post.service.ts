import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Requestbuscarexpediente4  } from '../models/requestbuscarexpediente4';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json;charset=UTF-8'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private host = 'http://localhost:8080';

  private url = '/all-users_v1';

  private urlBuscarsolicitudestablecimiento3 = '/buscarsolicitudestablecimiento3';
  private urlBuscarexpediente4 = '/buscarexpediente4';
  private urlCbodgtipotramite = '/cbodgtipotramite';
  private urlCboclasificacionestablecimiento = '/cboclasificacionestablecimiento';
  private urlCbotipopersona = '/cbotipopersona';
  private urlCargaSolicitud= '/cargarSolicitudEstablecimiento';
  private urlCargarBusquedas= '/cargarBusquedas';
  private urlCargarBusquedas2= '/cargarBusquedas2';
  private urlCargarBusquedas3= '/cargarBusquedas3';


  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get<any>(this.host+this.url);
  }

  getBuscarexpediente4(data:any){
      return this.httpClient.post<any>(this.host+this.urlBuscarexpediente4, data, httpOptions);
  }

  getCbodgtipotramite(){
    return this.httpClient.get<any>(this.host+this.urlCbodgtipotramite);
  }

  getCboclasificacionestablecimiento(){
    return this.httpClient.get<any>(this.host+this.urlCboclasificacionestablecimiento);
  }

  getCbotipopersona(){
    return this.httpClient.get<any>(this.host+this.urlCbotipopersona);
  }

  getBuscarsolicitudestablecimiento3(data:any){
    return this.httpClient.post<any>(this.host+this.urlBuscarsolicitudestablecimiento3, data, httpOptions);
  }

  getCargaSolicitud(data:any){
    return this.httpClient.post<any>(this.host+this.urlCargaSolicitud, data, httpOptions);
  }

  getCargarBusquedas(data:any){
    return this.httpClient.post<any>(this.host+this.urlCargarBusquedas, data, httpOptions);
  }

  getCargarBusquedas2(data:any){
    return this.httpClient.post<any>(this.host+this.urlCargarBusquedas2, data, httpOptions);
  }

  getCargarBusquedas3(data:any){
    return this.httpClient.post<any>(this.host+this.urlCargarBusquedas3, data, httpOptions);
  }

}
