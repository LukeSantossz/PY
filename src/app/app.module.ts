import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Importando o BrowserModule
import { AppRoutingModule } from './app-routing.module'; // Importando o AppRoutingModule
import { AppComponent } from './app.component'; // Importando o AppComponent
import { LoginComponent } from './login/login.component'; // Importando o LoginComponent
import { RegisterComponent } from './register/register.component'; // Importando o RegisterComponent
import { HomeComponent } from './home/home.component'; // Importando o HomeComponent

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,         // Importando o AppComponent standalone
    LoginComponent,       // Importando o LoginComponent standalone
    RegisterComponent,    // Importando o RegisterComponent standalone
    HomeComponent         // Importando o HomeComponent standalone
  ],
  providers: []
})
export class AppModule { }
