import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ParamService {
  // https://immense-tundra-17548.herokuapp.com/articles
  url = 'https://murmuring-fortress-42997.herokuapp.com/parametres';

  constructor(private http: HttpClient) {}

  getAllParam() {
    return this.http.get(this.url);
  }

  getParamById(id) {
    return this.http.get(this.url + '/' + id);
  }
}
