import { Injectable } from '@angular/core';
import Snackbar from 'awesome-snackbar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  showError(message: string) {
    new Snackbar(message, {
      position: 'top-center',
      timeout: 3000,
      theme: 'light'
    });
  }
}
