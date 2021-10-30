import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const options ={
      stringsElement: '#typed-strings',
      strings: ["<span style='color:rgb(65, 64, 64)'>Seja Bem-Vindo a Popeye Barber Beer</span>","<span style='color:rgb(65, 64, 64)'>Popeye Barber Beer cuidando sempre da sua autoestima</span>","<span style='color:rgb(65, 64, 64)'>Mude seu visual e beba uma cerveja conosco</span>","<span style='color:rgb(65, 64, 64)'>Inovar faz bem</span>"],
      typedSpeed: 2000,
      backSpeed: 2000,
      backDelay: 2000,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
    };
    const typed = new Typed('.typing-element', options);
  }

  gotoCadastroClientes(){
    this.router.navigate(['cadastro-clientes']);
  }

}

