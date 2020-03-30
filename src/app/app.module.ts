import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { ArticleComponent } from './front/article/article.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ArticleFictifService } from './service/article-fictif.service';
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { ListeComponent } from './back/article/liste/liste.component';
import { MenuDashboardComponent } from './back/menu-dashboard/menu-dashboard.component';
import { AjouterComponent } from './back/article/ajouter/ajouter.component';
import { CarouselComponent } from './front/carousel/carousel.component';
import { FooterComponent } from './front/footer/footer.component';
import { LoginComponent } from './front/login/login.component';
import { UserService } from './service/user.service';
import { ListeUserComponent } from './back/user/liste-user/liste-user.component';

import { ListeParamComponent } from './back/param/liste-param/liste-param.component';
import { ParamService } from './service/param.service';
import { AjouterUserComponent } from './back/user/ajouter-user/ajouter-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ArticleComponent,
    NotFoundComponent,
    DashboardComponent,
    ListeComponent,
    MenuDashboardComponent,
    AjouterComponent,
    CarouselComponent,
    FooterComponent,
    LoginComponent,
    ListeUserComponent,
    ListeParamComponent,
    AjouterUserComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: AccueilComponent },
      { path: 'article/:id', component: ArticleComponent },
      { path: 'admin/article/liste', component: ListeComponent },
      { path: 'admin/article/ajouter', component: AjouterComponent },
      { path: 'admin', component: DashboardComponent }, // admin après admin/article/liste
      { path: 'login', component: LoginComponent },
      { path: 'admin/user/liste-user', component: ListeUserComponent },
      { path: 'admin/user/ajouter-user', component: AjouterUserComponent },
      { path: 'admin/param/liste-param', component: ListeParamComponent },
      { path: 'admin/user/ajouter-user', component: AjouterUserComponent },
      { path: '**', component: NotFoundComponent }
    ]),
    HttpClientModule
  ],
  providers: [ArticleFictifService, UserService, ParamService],
  bootstrap: [AppComponent]
})
export class AppModule {}
