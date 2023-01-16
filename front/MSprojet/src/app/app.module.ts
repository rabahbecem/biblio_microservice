import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientServiceService } from './client-service.service';
import { FactureComponent } from './facture/facture.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LivreComponent } from './livre/livre.component';
import { CommandeComponent } from './commande/commande.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FactureComponent,
    LivreComponent,
    CommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [ClientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
