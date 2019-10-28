import { Component, OnInit } from '@angular/core';
import { Stage } from '../../../Models/stage.model';

@Component({
  selector: 'app-list-stage',
  templateUrl: './list-stage.component.html',
  styleUrls: ['./list-stage.component.css']
})
export class ListStageComponent implements OnInit {

  stageList : Stage[];
  a : Stage =
  {
    Id : 1,
    Name : 'Trabajo preliminar',
    Description : 'Planificacion y presupuesto',
    Default : true
  }
  b : Stage =
  {
    Id : 2,
    Name : 'Trabajo Final',
    Description : 'Planificacion y presupuesto',
    Default : false
  }

  constructor() { }

  ngOnInit() {
    this.stageList = [this.a, this.b,this.a, this.b,this.a, this.b]
  }

}
