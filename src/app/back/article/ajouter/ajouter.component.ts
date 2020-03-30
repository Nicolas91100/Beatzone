import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  constructor(private http: HttpClient) {}
  private url = 'https://murmuring-fortress-42997.herokuapp.com/articles/';
  private articles;
  // ============ sécurité formulaire ===================
  erreur = false;
  success = false;

  error = {
    titre: false,
    contenu: false,
    mp3: false,
    image: false,
    nomAuteur: false,
    estPublie: false
  };

  ngOnInit(): void {
    this.http.get(this.url).subscribe((response: Response) => {
      console.log(response);
      this.articles = response;
    });
  }
  onSubmitUser(f: NgForm) {
    console.log(f.value);
    const article = f.value;

    this.http.post(this.url, article).subscribe((response: Response) => {
      // que f.value soit conforme ou pas  => toujours OK avec JSONPlaceholder
      article._id = response;
      console.log(article);
      this.articles.splice(0, 0, article);
    });
  }

  onFrmSubmit(f) {
    // console.log(f.form.controls);

    if (!f.valid) {
      this.erreur = true;
      this.success = false;
      for (const control in f.form.controls) {
        this.error[control] =
          f.form.controls[control].status === 'INVALID' ? true : false;
      }
    } else {
      this.erreur = false;
      this.success = true;
      f.resetForm();
      // autre traitement sauvegarde
    }
  }

  onChange(f) {
    this.erreur = false;
    this.success = false;
    for (const control in f.form.controls) {
      this.error[control] = false;
    }
  }

  onFrmReset(f) {
    this.erreur = false;
    this.success = false;
    for (const control in f.form.controls) {
      this.error[control] = false;
    }
    f.resetForm();
  }
}
