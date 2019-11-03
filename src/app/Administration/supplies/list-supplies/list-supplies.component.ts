import { Component, OnInit } from '@angular/core';
import { Supply } from 'src/app/Models/supply.model';
import { SupplyManagementService } from 'src/app/Services/supply-management.service';

@Component({
  selector: 'app-list-supplies',
  templateUrl: './list-supplies.component.html',
  styleUrls: ['./list-supplies.component.css']
})
export class ListSuppliesComponent implements OnInit {

  constructor(private serviceSupply: SupplyManagementService) { }

  ngOnInit() {
    this.serviceSupply.getSupplies();
  }

}
