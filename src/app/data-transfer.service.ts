import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private notifySibling = new Subject<void>();
  public formData:Object[] =[];
  notifySibling$ = this.notifySibling.asObservable();

  notifySiblingMethod() {
    this.notifySibling.next();
  }
  
}
