import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplyManagementService } from 'src/app/Services/supply-management.service';

@Component({
  selector: 'app-list-supply-stage',
  templateUrl: './list-supply-stage.component.html',
  styleUrls: ['./list-supply-stage.component.css']
})
export class ListSupplyStageComponent implements OnInit {
  idStage:number
  constructor(private route: ActivatedRoute,
    private serviceSupply:SupplyManagementService) { }

  ngOnInit() {
    this.idStage = +this.route.snapshot.paramMap.get('stage');
    this.serviceSupply.getSupplyStage(this.idStage);
  }

}
