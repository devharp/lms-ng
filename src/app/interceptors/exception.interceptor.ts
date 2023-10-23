import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AppService } from '../app.service';

@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {

  constructor(private appService: AppService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        catchError((httpErrorResponse: HttpErrorResponse) => {
          if (httpErrorResponse.status >= 400 && httpErrorResponse.status < 600) {
            httpErrorResponse.error.message.map((e: string) => this.appService.showError(e, 'Error'))
          }
          return throwError(httpErrorResponse);
        })
      )


  }
}
