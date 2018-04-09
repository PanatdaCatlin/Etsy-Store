import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { YellowCardComponent } from './yellow-card/yellow-card.component';
import { TopRowComponent } from './top-row/top-row.component';
import { CardComponent } from './top-row/card/card.component';
import { CardRowComponent } from './card-row/card-row.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UndernavComponent } from './undernav/undernav.component';
import { TextColumnsComponent } from './text-columns/text-columns.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicCardRowComponent } from './dynamic-card-row/dynamic-card-row.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    AdminComponent,
    EditProductComponent,
    YellowCardComponent,
    TopRowComponent,
    CardComponent,
    CardRowComponent,
    NavbarComponent,
    UndernavComponent,
    TextColumnsComponent,
    DynamicCardRowComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
