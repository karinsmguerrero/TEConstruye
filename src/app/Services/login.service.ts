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
    const body = {
      username : username,
      password: password
    }
    this.http.post(this.constant.routeURL + '/CheckCredentials', body).toPromise().then((res: Response) =>{ 
      if(res['result'][0].checkcredentials != 0){
        localStorage.setItem('userName', username);
        localStorage.setItem('userRole', res['result'][0].checkcredentials);
        this.router.navigate(['/welcome']);
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
