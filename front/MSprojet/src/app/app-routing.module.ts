import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { FactureComponent } from './facture/facture.component';
import { LivreComponent } from './livre/livre.component';

const routes: Routes = [
  {path: 'client',component:ClientComponent},
  {path: 'facture',component:FactureComponent},
  {path: 'livre',component:LivreComponent},
  {path: 'commande',component:CommandeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
