import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private isOpenSource: Subject<boolean>
  private isOpen$: Observable<boolean>

  constructor() {
    this.isOpenSource = new Subject<boolean>
    this.isOpen$ = this.isOpenSource.asObservable()

  }

  changeOpenStatus(status: boolean) {
    this.isOpenSource.next(status)
  }
  getStatus(): Observable<boolean> {
    return this.isOpen$
  }
}
