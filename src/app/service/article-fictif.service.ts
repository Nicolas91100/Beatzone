import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleFictifService {
  url = 'https://murmuring-fortress-42997.herokuapp.com/articles/';

  constructor(private http: HttpClient) {}

  getAllArticles() {
    return this.http.get(this.url); // RECUPERATION DES ARTICLES
  }

  getArticleById(id) {
    return this.http.get(this.url + '/' + id); // RECUPERATION D'ARTICLE PAR ID
  }
  deleteArticle(id) {
    return this.http.delete(this.url + `/${id}`);
  } // SUPPRESSION D'UN ARTICLE
  addPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  } // AJOUTER UN ARTICLE
}
