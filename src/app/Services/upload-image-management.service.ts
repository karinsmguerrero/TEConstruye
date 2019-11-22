import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class UploadImageManagementService {

  constructor(private http : HttpClient,
              private constant: ConstantsService) { }

  postFile(fileToUpload: File,name:string) {
    const formData: FormData = new FormData();
    console.log(fileToUpload.name)
    formData.append('Image', fileToUpload, name);
    return this.http
      .post(this.constant.routeURL+'/UploadImage', formData);
  }
}
