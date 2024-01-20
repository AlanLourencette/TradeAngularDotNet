import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() autenticadoEmitter = new EventEmitter();

  invalidUser: boolean = false;
  formulario: any;

  constructor(private usuarioService: UsuarioService) { 
    this.formulario = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  get username() {
    return this.formulario.get('username');
  }

  get password() {
    return this.formulario.get('password');
  }

  Autenticar(){
    if(this.formulario.invalid) {
      return;
    }

    const usuario: Usuario = this.formulario.value;


    this.usuarioService.AutenticarUsuario(usuario).subscribe((resultado) => {
      if(resultado)
      {
        localStorage.clear();
        localStorage.setItem('token', JSON.stringify(resultado.token));
        this.autenticadoEmitter.emit();
      }
      else{
        this.invalidUser = true;
      }
    });
  }
}
