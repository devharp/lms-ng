import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(request)
        .pipe(
            catchError((error: HttpErrorResponse) => {
                console.error('Got an error');
                return throwError(error);
            })
        )
        

}
}
