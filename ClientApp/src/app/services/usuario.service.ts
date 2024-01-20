import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.models';
import jwt_decode from 'jwt-decode';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
    url = 'https://localhost:7105/api/usuario';


    constructor(private router: Router, private httpCliente: HttpClient) {}


    AutenticarUsuario(usuario: Usuario): Observable<any> {
        return this.httpCliente.post(`${this.url}/login`, usuario);
    }

    estaAutenticado(): boolean {
      const token = localStorage.getItem('token');
  
      if (token) {
        const tokenDecodificado = jwt_decode(token) as any; // Certifique-se de instalar a biblioteca jwt-decode
  
        const tempoAtual = Math.floor(Date.now() / 1000);
  
        if (tokenDecodificado.exp < tempoAtual) {
          return false;
        }
  
        return true;
      }
  
      return false;
    }

}

