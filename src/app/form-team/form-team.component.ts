import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'app/models/team';
import {Member} from "app/models/member";
import {TeamServiceService} from "../services/team-service.service";

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.scss']
})
export class FormTeamComponent implements OnInit {

  @Input()
  team:Team;
  formTeam:Team={
    number_participants:0,
    name:"0",
    members:[]
  };
  constructor(private teamService: TeamServiceService) { }
  invalidTeamName:boolean = false;
  teamNameClass:string = "form-group";

  @Input()
  invalidMemberName:boolean[];
  @Input()
  memberNameClass:string[];

  @Input()
  invalidMemberEmail:boolean[];
  @Input()
  memberEmailClass:string[];

  @Input()
  invalidMemberPhone:boolean[];
  @Input()
  memberPhoneClass:string[];

  ngOnInit() {
  }

  resetValues(){
    this.invalidTeamName=false;
    this.teamNameClass="form-group";

    this.invalidMemberName=[false,false,false,false];
    this.memberNameClass=["form-group","form-group","form-group","form-group"];

    this.invalidMemberEmail=[false,false,false,false];
    this.memberEmailClass=["form-group","form-group","form-group","form-group"];

    this.invalidMemberPhone=[false,false,false,false];
    this.memberPhoneClass=["form-group","form-group","form-group","form-group"];

  }

  setLeader(index:number){
    this.team.members.forEach(member=>{
      member.leader=false;
    });
    this.team.members[index].leader=true;
  }

  register(){
    this.resetValues();

    if(this.validateTeam()){

      this.formTeam.name=this.team.name;
      this.formTeam.number_participants=this.team.number_participants;

      let filledMembers =[];

      this.team.members.forEach(member => {
        let filledName=member.name==="";
        let filledEmail=member.email==="";
        let filledPhone=member.phone==="";
        if(!filledName&&!filledEmail&&!filledPhone){
          filledMembers.push(member);
        }
      });
      this.formTeam.members=filledMembers;
      console.log('sending msg');
      this.teamService.createTeam(this.formTeam).subscribe(res=>{
        //nothing lel
      });
      console.log('msg sent');
    }
  }
  addMember(){
    this.team.number_participants++;    
  }

  validateTeam(){
    let isValid=true;
    if(this.team.name===""){
      this.invalidTeamName=true;
      this.teamNameClass="form-group has-danger";
      isValid=false;
    }
    this.team.members.forEach((member, index) => {
      if(!this.validateMember(member,index)){
        isValid=false;
      }
    });
    return isValid;
  }

  validateMember(member:Member,index:number){
    let isValid=true;
    if(member.name===""&&member.email===""&&member.phone===""){
      return true;
    }
    if(member.name===""){
      this.invalidMemberName[index]=true;
      this.memberNameClass[index]="form-group has-danger"
      isValid=false;
    }
    if(member.email===""){
      this.invalidMemberEmail[index]=true;
      this.memberEmailClass[index]="form-group has-danger"
      isValid=false;

    }
    if(member.phone===""){
      this.invalidMemberPhone[index]=true;
      this.memberPhoneClass[index]="form-group has-danger"
      isValid=false;
    }
    return isValid;
  }
}
