import { Component, OnInit } from '@angular/core';
import { SupplyAux } from 'src/app/Models/supply-aux.model';
import { SupplyManagementService } from 'src/app/Services/supply-management.service';
import { NgForm } from '@angular/forms';
import { Supply } from 'src/app/Models/supply.model';

@Component({
  selector: 'app-register-supplies',
  templateUrl: './register-supplies.component.html',
  styleUrls: ['./register-supplies.component.css']
})
export class RegisterSuppliesComponent implements OnInit {

  supply:Supply;

  constructor(private serviceSupply: SupplyManagementService) { }

  ngOnInit() {
    this.resetSupplyForm();
  }

  resetSupplyForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.supply = {
      id: 0,
      name: '',
      price: 0
    }
  }

  onSubmit(form: NgForm) {
    this.serviceSupply.insertSupply(form);
    this.resetSupplyForm(form);
  }

}
