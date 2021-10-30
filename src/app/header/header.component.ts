import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }



 // constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }


  gotoCadastroClientes(){
    this.router.navigate(['cadastro-clientes']);
  }

}
