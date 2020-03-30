import { Component, OnInit } from '@angular/core';
import { ArticleFictifService } from '../../../service/article-fictif.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  articles;

  constructor(private service: ArticleFictifService) {}

  ngOnInit(): void {
    this.service.getAllArticles().subscribe((response: Response) => {
      this.articles = response; // PERMET DE RECUPERER TOUT LES ARTICLES
      console.log(response);
    });
  }
  onDeleteArticle(article) {
    this.service.deleteArticle(article._id).subscribe((response: Response) => {
      console.log(response);
      const index = this.articles.indexOf(article); // PERMET DE SUPPRIMER UN ARTICLE PAR ID
      this.articles.splice(index, 1);
    });
  }
}
