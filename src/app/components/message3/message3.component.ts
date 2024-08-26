import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message3',
  standalone: true,
  imports: [],
  templateUrl: './message3.component.html',
  styleUrl: './message3.component.css'
})
export class Message3Component {
  messages: any = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessage().subscribe(data => {
      if (data) {
        this.messages.push(data);
      } else {
        this.messages = [];
      }
    })
  }
}
