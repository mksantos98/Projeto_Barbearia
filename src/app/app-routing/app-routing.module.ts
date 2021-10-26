import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './../content/content.component';
import { PlanosComponent } from './../planos/planos.component';
import { CadastroClientesComponent } from './../cadastro-clientes/cadastro-clientes.component';
import { ContatosComponent } from './../contatos/contatos.component';
import { PlanosvipComponent } from './../planosvip/planosvip.component';
import { QuemsomosComponent } from './../quemsomos/quemsomos.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'planos', component: PlanosComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'planosvip', component: PlanosvipComponent },
  { path: 'quemsomos', component: QuemsomosComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
