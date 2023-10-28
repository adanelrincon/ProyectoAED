import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endPoint = "http://localhost:8080/torneo"; 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  constructor(private httpClient: HttpClient) { }

  getTorneos() {
    return this.httpClient.get(endPoint);
  }

  getOneTorneo(id: number) {
    return this.httpClient.get(`${endPoint}/${id}`);
  }

  addTorneo(torneo: any) {
    return this.httpClient.post(endPoint, torneo, httpOptions);
  }

  deleteTorneo(id: number) {
    return this.httpClient.delete(`${endPoint}/${id}`);
  }

  updateTorneo(id: number, updatedTorneo: any) {
    return this.httpClient.put(`${endPoint}/${id}`, updatedTorneo, httpOptions);
  }
}
