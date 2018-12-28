import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Team} from "../models/team";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class TeamServiceService {


  private url:string="http://51.75.206.22:8000/api/team";

  constructor(private http: HttpClient) { }


  public createTeam(team:Team):Observable<Team>{
    return this.http.post<Team>(this.url,team,httpOptions);
  }

  public readAllTeams():Observable<Team[]>{
    return this.http.get<Team[]>(this.url,httpOptions);
  }
}
