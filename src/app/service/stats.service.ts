import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StatsService {
  // https://immense-tundra-17548.herokuapp.com/articles
  urlArt = 'https://murmuring-fortress-42997.herokuapp.com/articles';
  urlUser = 'https://murmuring-fortress-42997.herokuapp.com/utilisateurs';
  urlComment = 'https://murmuring-fortress-42997.herokuapp.com/commentaires';
  urlParam = 'https://murmuring-fortress-42997.herokuapp.com/parametres';

  constructor(private http: HttpClient) {}

  getAllArticles() {
    return this.http.get(this.urlArt);
  }
  getAllComments() {
    return this.http.get(this.urlComment);
  }

  getAllUser() {
    return this.http.get(this.urlUser);
  }
  getAllParam() {
    return this.http.get(this.urlParam);
  }
}
