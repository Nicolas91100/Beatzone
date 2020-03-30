import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // https://immense-tundra-17548.herokuapp.com/articles
  url = 'https://murmuring-fortress-42997.herokuapp.com/utilisateurs';

  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http.get(this.url);
  }

  getUserById(id) {
    return this.http.get(this.url + '/' + id);
  }
  deleteUser(id) {
    return this.http.delete(this.url + `/${id}`);
  }
}
