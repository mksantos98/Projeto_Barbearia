import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanosComponent } from './planos/planos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PlanosvipComponent } from './planosvip/planosvip.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroClientesComponent,
    PlanosComponent,
    ContatosComponent,
    PlanosvipComponent,
    QuemsomosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
