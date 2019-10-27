import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ConstantsService } from './constants.service';
import { Credentials } from '../Models/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  private credentials: Credentials;


  constructor(private http: HttpClient, private toastr: ToastrService,
    private constant: ConstantsService, private router: Router) { }

  login(username: string, password: string) {
    this.http.get(this.constant.routeURL + '/GetCredenciales?username=' + username).toPromise().then(res => {
      this.credentials = res as Credentials;
      if (this.credentials.Username == username && this.credentials.Contrasena == password) {
        localStorage.setItem('userName', this.credentials.Username);
        localStorage.setItem('userRole', this.credentials.TipoCuenta);
        this.router.navigate(['/home']);
      }
      else {
        this.toastr.error('Error!', 'No se ha podido iniciar sesión');
      }
    });
  }

  logout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    this.router.navigate(['/signin']);
  }
}
