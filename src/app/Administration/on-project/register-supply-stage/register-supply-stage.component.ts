import { Component, OnInit } from '@angular/core';
import { SupplyManagementService } from 'src/app/Services/supply-management.service';
import { SupplyAux } from 'src/app/Models/supply-aux.model';
import { NgForm } from '@angular/forms';
import { StageProjectManagementService } from 'src/app/Services/stage-project-management.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-supply-stage',
  templateUrl: './register-supply-stage.component.html',
  styleUrls: ['./register-supply-stage.component.css']
})
export class RegisterSupplyStageComponent implements OnInit {
  supply:SupplyAux;
  idstage:number;
  idsupplytype:number;
 constructor(private route: ActivatedRoute,
             private serviceSupply:SupplyManagementService,
             private serviceStage:StageProjectManagementService) { }

  ngOnInit() {
    this.serviceSupply.getSupplies(); 
    this.idstage = +this.route.snapshot.paramMap.get('stage');
    this.idsupplytype=0;
    this.resetProjectForm();
  }

  supplyTypeSelected(id :number){
    this.idsupplytype=id;
  }
  
  resetProjectForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.supply = {
      supplyid: 0,
      quantity: 0
    }
  }

  onSubmit(form: NgForm) {
    this.serviceStage.insertSupply(form,this.idstage,this.idsupplytype);
    this.resetProjectForm(form);
  }

}
