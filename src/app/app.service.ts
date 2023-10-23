import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private toastr: ToastrService) { }

  public showError(desc: string, title: string) {
    this.toastr.error(desc, title, { timeOut: 3000, positionClass: 'toast-top-center' });
  }
}
