import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FrasesListComponent } from './frases/frases-list/frases-list.component';
import { FraseDetailComponent } from './frases/frases-list/frase-detail/frase-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    FrasesListComponent,
    FraseDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
