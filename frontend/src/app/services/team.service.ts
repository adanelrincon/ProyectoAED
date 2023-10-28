import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const endPoint = "http://localhost:8080/teams";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  getTeams() {
    return this.httpClient.get(endPoint);
  }

  getOneTeam(id: number) {
    return this.httpClient.get(endPoint + `/${id}`);
  }

  add(team: any){
    let body = new URLSearchParams();
    body.append("name", team.name);
    body.append("region", team.region);
    body.append("position", team.position.toString());

    return this.httpClient.post(endPoint, body, httpOptions)
  }

  delete(id: number) {
    return this.httpClient.delete(`${endPoint}/${id}`);
  }

  update(id: number, updatedTeam: any) {
    let body = new URLSearchParams();
    body.append("name", updatedTeam.name);
    body.append("region", updatedTeam.region);
    body.append("position", updatedTeam.position.toString());
    return this.httpClient.put(`${endPoint}/${id}`, body.toString(), httpOptions);
  }
}
