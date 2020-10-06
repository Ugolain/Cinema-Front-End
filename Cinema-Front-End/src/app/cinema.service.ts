import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private host:string = "http://localhost:8080"
  constructor(private http:HttpClient) { }

  public getVilles(){
    return this.http.get(this.host+"/villes");
  }

  public getCinemas(v){
      return this.http.get(v._links.cinemas.href);
  }

  public getSalles(c){
      return this.http.get(c._links.salles.href);
  }

  public getProjections(salle){
    let url=salle._links.projectionFilms.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p1");
  }

}
