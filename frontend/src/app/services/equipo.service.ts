import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endPoint = "http://localhost:8080/equipos"; 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private httpClient: HttpClient) { }

  getEquipos() {
    return this.httpClient.get(endPoint);
  }

  getEquipo(id: number) {
    return this.httpClient.get(`${endPoint}/${id}`);
  }

  addEquipo(equipo: any){
    return this.httpClient.post(endPoint, equipo, httpOptions)
  }

  deleteEquipo(id: number) {
    return this.httpClient.delete(`${endPoint}/${id}`);
  }

  updateEquipo(id: number, updatedEquipo: any) {
    return this.httpClient.put(`${endPoint}/${id}`, updatedEquipo, httpOptions);
  }
}
