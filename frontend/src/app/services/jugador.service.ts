import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endPoint = "http://localhost:8080/jugador"; 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor(private httpClient: HttpClient) { }

  getJugadores() {
    return this.httpClient.get(endPoint);
  }

  getOneJugador(id: number) {
    return this.httpClient.get(`${endPoint}/${id}`);
  }

  addJugador(jugador: any) {
    return this.httpClient.post(endPoint, jugador, httpOptions);
  }

  deleteJugador(id: number) {
    return this.httpClient.delete(`${endPoint}/${id}`);
  }

  updateJugador(id: number, updatedJugador: any) {
    return this.httpClient.put(`${endPoint}/${id}`, updatedJugador, httpOptions);
  }
}