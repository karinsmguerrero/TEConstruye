import { Component, OnInit } from '@angular/core';
import { SupplyManagementService } from 'src/app/Services/supply-management.service';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {

  constructor(private serviceSupply: SupplyManagementService) { }

  ngOnInit() {
  }

  refresh(){
    this.serviceSupply.getSupplies();
  }

}
