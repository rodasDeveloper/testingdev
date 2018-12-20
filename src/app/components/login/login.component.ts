import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(private chatService: ChatService) {}

  ngOnInit() {}

  ingresar(opcion: string) {
    console.log(opcion);
    this.chatService.login(opcion);
  }
}
