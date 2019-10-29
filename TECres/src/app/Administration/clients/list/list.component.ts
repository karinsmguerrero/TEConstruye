import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/client';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clientList : Client[];
  
  constructor(private clientService : ClientService) { }

  ngOnInit() {
    this.clientService.getAllClients();
   // alert("Username: " + this.clientList[0]);
  }

}
