import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // ce composant permet de récupérer l'id dans l'url actuel
import {ArticleFictifService} from '../../service/article-fictif.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article; // 1 seul article
  constructor(
      private router: ActivatedRoute ,
      private service: ArticleFictifService) { }
  ngOnInit(): void {
    // maintenant nous souhaitons récupérer l'id qui est dans l'url
    // params l'ensemble des informations qui sont dans l'url
    this.router.paramMap.subscribe( (params) => {
      // console.log(params);
      const id = params.get('id');
      console.log(id);
      this.service.getArticleById(id) // "https://jsonplaceholder.typicode.com/posts/1"
      .subscribe( (response: Response) => {
        this.article = response;
        console.log(this.article);
      });
    });



  }

}
