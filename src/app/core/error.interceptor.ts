import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => this.errorHandler(error))
    );
  }
  errorHandler(error: HttpErrorResponse) {


    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: '⚠️ There was an error',
    });

    return throwError(
      () => new Error('Error interceptor:' + JSON.stringify(error))
    );
  }
}