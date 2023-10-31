import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ExceptionInterceptor } from './interceptors/exception.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { HomepageComponent } from './component/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    UserAuthenticationModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ExceptionInterceptor, multi: true },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
