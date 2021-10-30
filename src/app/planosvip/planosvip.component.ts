import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-planosvip',
  templateUrl: './planosvip.component.html',
  styleUrls: ['./planosvip.component.css']
})
export class PlanosvipComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const options ={
      stringsElement: '#typed-strings',
      strings: ["<span style='color:rgb(65, 64, 64)'>Conheça Nossos Planos</span>", "<span style='color:rgb(65, 64, 64)'>Adquira Já o Seu!</span>"],
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

  }

