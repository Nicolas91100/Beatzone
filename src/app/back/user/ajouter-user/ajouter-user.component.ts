import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent implements OnInit {
  constructor(private http: HttpClient) {}
  private url = 'http://secret-shelf-59770.herokuapp.com/utilisateurs'; // "http://localhost:3200/utilisateurs";

  private utilisateurs;
  // ============ sécurité formulaire ===================
  erreur = false;
  success = false;

  error = {
    nom: false,
    prenom: false,
    email: false,
    password: false,
    role: false,
    estActif: false
  };

  ngOnInit(): void {
    this.http.get(this.url).subscribe((response: Response) => {
      console.log(response);
      this.utilisateurs = response;
    });
  }
  onSubmitUser(f: NgForm) {
    console.log(f.value);
    const user = f.value;

    this.http.post(this.url, user).subscribe((response: Response) => {
      // que f.value soit conforme ou pas  => toujours OK avec JSONPlaceholder
      user._id = response;
      console.log(user);
      this.utilisateurs.splice(0, 0, user);
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
