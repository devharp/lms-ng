import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ExceptionInterceptor } from './interceptors/exception.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserAuthenticationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExceptionInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
