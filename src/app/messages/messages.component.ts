// Import the necessary modules and components.
import { Component } from '@angular/core';
import { MessageService } from '../services/message.service/message.service';
// Decorator for the MessagesComponent class.
@Component({
  // Selector to match this component in HTML templates.
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

// Class definition for the MessagesComponent.
export class MessagesComponent {
  // Constructor to inject the MessageService into this component.
  constructor(public messageService: MessageService) { }
}
