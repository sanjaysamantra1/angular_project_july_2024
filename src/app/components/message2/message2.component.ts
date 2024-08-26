import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message2',
  standalone: true,
  imports: [],
  templateUrl: './message2.component.html',
  styleUrl: './message2.component.css'
})
export class Message2Component {
  messages: any = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessage().subscribe(data => {
      if (data) {
        this.messages.push(data);
      } else {
        this.messages = [];
      }
    });
  }
}
