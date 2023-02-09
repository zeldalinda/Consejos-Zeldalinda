import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { TutorialesComponent } from './content/tutoriales/tutoriales.component';
import { ConsejosComponent } from './content/consejos/consejos.component';
import { IdeasComponent } from './content/ideas/ideas.component';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule,Routes } from '@angular/router';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { PracticasComponent } from './practicas/practicas.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { CrudService } from './servicios/crud.service';

const appRoutes:  Routes=[​
  { path: 'inicio', component: InicioComponent },​
  { path: 'tutoriales', component: TutorialesComponent },​
  { path: 'consejos', component: ConsejosComponent },​
  { path: 'ideas', component: IdeasComponent },​ 
  { path: 'sesion', component: SesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'Practicas', component: PracticasComponent }
];​

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    InicioComponent,
    TutorialesComponent,
    ConsejosComponent,
    IdeasComponent,
    SesionComponent,
    RegistroComponent,
    PracticasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    AppRoutingModule,
    OwlModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }