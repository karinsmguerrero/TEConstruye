import { Component, OnInit } from '@angular/core';
import { UploadImageManagementService } from 'src/app/Services/upload-image-management.service';
import { ActivatedRoute } from '@angular/router';
import { StageProjectManagementService } from 'src/app/Services/stage-project-management.service';
import { SupplyManagementService } from 'src/app/Services/supply-management.service';
import { SupplyAux } from 'src/app/Models/supply-aux.model';
import { NgForm } from '@angular/forms';
import { BillItem } from 'src/app/Models/bill-item.model';
import { Bill } from 'src/app/Models/bill.model';
import { Supply } from 'src/app/Models/supply.model';
import { BillItemAux } from 'src/app/Models/bill-item-aux.model';

@Component({
  selector: 'app-bill-project',
  templateUrl: './bill-project.component.html',
  styleUrls: ['./bill-project.component.css']
})
export class BillProjectComponent implements OnInit {

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;
  itemList:BillItem[];
  itemsAux:BillItemAux[];
  bill:Bill;
  idstage:number;
  supply:Supply;
  imageName:string;
 constructor(private route: ActivatedRoute,
            private imageService : UploadImageManagementService,
             private serviceSupply:SupplyManagementService,
             private serviceStage:StageProjectManagementService) { }

  ngOnInit() {
    this.serviceSupply.getSupplies(); 
    this.idstage = +this.route.snapshot.paramMap.get('stage');
    //this.idstage = 4;
    this.itemList=[];
    this.itemsAux=[];
    this.imageName='';
    this.resetExpensesForm();
  }

  supplySelected(supply :Supply){
    this.supply=supply;
  }
  addItem(quantity:number){
    const item={
      idsupply:this.supply.id,
      quantity:quantity
    };
    const aux={
      idsupply:this.supply.id,
      quantity:quantity,
      supply_name:this.supply.name
    };
    this.itemsAux.push(aux);
    this.itemList.push(item);
  }
  
  resetExpensesForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.itemList=[];
    this.bill = {
      idstage : 0,
	    provider : '',
	    billphoto : '',
      billnumber : '',
      items:[]
    }
    this.itemList=[];
    this.itemsAux=[];
  }

  onSubmit(form: NgForm,Image) {
    this.imageName=form.value.provider+"_"+form.value.billnumber+".png";

    this.serviceStage.insertExpenses(form, this.idstage, this.itemList );
    this.imageService.postFile(this.fileToUpload,this.imageName).subscribe(
      data =>{
        console.log('done');
        Image.value = null;
        this.imageUrl = "/assets/img/default-image.png";
      }
    );
    this.resetExpensesForm(form);

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


}
