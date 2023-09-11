// Import the 'Intectable' function from the library '@angular/core'
import { Injectable } from '@angular/core';

// Decorator makes the service availble for dependency injection throughot the entire app.
@Injectable({
  // Provided at the root level of the application, creating a single instance of the service.
  providedIn: 'root',
})


// This class manages the service. It's initialized with an empty string array.
// it defines two methods: one for displaying a message with an 'ID',
// and another for clearing or deleting the selected messages.
export class MessageService {
  messages: string[] = [];

  // method to add a new message to the messages array.
  add(message: string) {
    this.messages.push(message);
  }
  // method to clear all messages from the messages array.
  clear() {
    this.messages = [];
  }
}
