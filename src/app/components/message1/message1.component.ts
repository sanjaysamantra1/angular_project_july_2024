import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message1',
  standalone: true,
  imports: [],
  templateUrl: './message1.component.html',
  styleUrl: './message1.component.css'
})
export class Message1Component {
  constructor(private messageService: MessageService) { }

  sendMsg(msg: string) {
    this.messageService.sendMessage(msg);
  }
  clearMsg() {
    this.messageService.clearMessages();
  }
}
