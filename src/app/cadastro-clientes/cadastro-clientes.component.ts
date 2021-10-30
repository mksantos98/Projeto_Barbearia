import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {



  constructor(private router: Router) { }

  nome:string;
  email:string;
  telefone:string;
  servico:string;
  unidade:string;


  clientes =[];

  formCadastro = new FormGroup({
    nome: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    telefone: new FormControl('',[Validators.required]),
    servico: new FormControl('',[Validators.required]),
    unidade: new FormControl('',[Validators.required])
  });

  ngOnInit() {
  }
  cadastro() {
    this.clientes.push({'nome':this.nome, 'email':this.email, 'telefone':this.telefone, 'servico':this.servico, 'unidade':this.unidade});
    alert('Agendado com Sucesso');
    this.nome=null;
    this.email=null;
    this.telefone=null;
    this.servico=null;
    this.unidade=null;
    this.router.navigate(['/']);
  }
  }

