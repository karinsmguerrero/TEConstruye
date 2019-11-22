import { Component, OnInit } from '@angular/core';
import { ProjectAux } from '../Models/project-aux.model';
import { LocationManagementService } from '../Services/location-management.service';
import { SupplyManagementService } from '../Services/supply-management.service';
import { NgForm } from '@angular/forms';
import { ProjectManagementService } from '../Services/project-management.service';
import { TecresManagementService } from '../Services/tecres-management.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectTecres } from '../Models/project-tecres.model';
import { Property } from '../Models/property.model';
import { UploadImageManagementService } from '../Services/upload-image-management.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})

//Codigo tomado de:https://www.youtube.com/watch?v=c61wr1ZsHzY
export class TestingComponent implements OnInit {

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;
  constructor(private imageService : UploadImageManagementService) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Image){
   this.imageService.postFile(this.fileToUpload,
    'asdfg.png').subscribe(
     data =>{
       console.log('done');
       Image.value = null;
       this.imageUrl = "/assets/img/default-image.png";
     }
   );
  }

}

