import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject = new Subject<any>();
  private messageObservable = this.messageSubject.asObservable();

  sendMessage(message: string) {
    this.messageSubject.next({ text: message });
  }
  clearMessages() {
    this.messageSubject.next(null);
  }
  getMessage(): Observable<any> {
    return this.messageObservable; // converts subject to Observable
  }
}