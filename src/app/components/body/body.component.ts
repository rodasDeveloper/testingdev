import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  constructor(public chatService: ChatService) {
    chatService.logout();
  }
}
