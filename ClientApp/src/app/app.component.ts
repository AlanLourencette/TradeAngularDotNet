import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  autenticado: boolean = false;

  constructor(private router: Router, private usuarioService: UsuarioService){}

  ngOnInit() {
    this.autenticado = this.usuarioService.estaAutenticado();
  }

  Autenticado() {
    this.autenticado = true;
    this.router.navigate(['/home']);
  }

  Desautenticar() {
    this.autenticado = false;
    localStorage.clear();
    
    this.router.navigate(['/login']);
  }

}
