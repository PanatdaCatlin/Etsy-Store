import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UndernavComponent } from './undernav/undernav.component';
import { TopRowComponent } from './topRow/toprow.component';
import { CardRowComponent } from './cardRow/cardrow.component';
import { CardComponent } from './topRow/card/card.component';
import { OrangeCardComponent } from './orange-card/orange-card.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    NavbarComponent,
    UndernavComponent,
    TopRowComponent,
    CardRowComponent,
    CardComponent,
    OrangeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
