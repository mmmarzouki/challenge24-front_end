import { Component, OnInit } from '@angular/core';
import {Team} from "../models/team";
import {TeamServiceService} from "../services/team-service.service";
import {Member} from "../models/member";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  teams:Team[]=[];
  username:string="";
  password:string="";
  accepted:boolean=false;

  constructor(private teamService: TeamServiceService) { }

  private submit(){
    if(this.username==="techlens" && this.password==="techlens_admin"){
      this.accepted=true;
      console.log(this.teams);
    }
  }

  ngOnInit() {
    this.teamService.readAllTeams().subscribe(res=>{
      this.teams=res;
  });
  }

}
