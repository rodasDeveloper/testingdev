import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { element } from 'protractor';
import { elementProperty } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [],
})
export class ChatComponent implements OnInit {
  mensaje = '';
  elemento: any;

  constructor(private chatService: ChatService) {
    this.chatService.cargarMensajes().subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje() {
    console.log(this.mensaje);
    if (this.mensaje.length === 0) {
      return;
    }
    this.chatService
      .agregarMensaje(this.mensaje)
      .then(() => (this.mensaje = ''))
      .catch(() => console.error('Error al enviar', err));
  }
}
