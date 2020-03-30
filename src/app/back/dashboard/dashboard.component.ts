import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../service/stats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articles;
  users;
  comment;
  parametres;

  constructor(private service: StatsService) {}

  ngOnInit(): void {
    this.service
      .getAllArticles() // récuperer tous les articles
      .subscribe((response: Response) => {
        this.articles = response;
      }),
      this.service
        .getAllComments() // récuperer tous les commentaires
        .subscribe((response: Response) => {
          this.comment = response;
        }),
      this.service
        .getAllUser() // récuperer tous les utilisateurs
        .subscribe((response: Response) => {
          this.users = response;
        });
    this.service
      .getAllParam() // récuperer tous les parametre
      .subscribe((response: Response) => {
        this.parametres = response;
      });
  }
}
