import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Output() autenticadoEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  Sair(){
    this.autenticadoEmitter.emit();
  }
}
