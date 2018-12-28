import {Component, OnInit, ViewChild} from '@angular/core';
import { Team } from 'app/models/team';
import {
    PerfectScrollbarComponent,
    PerfectScrollbarConfigInterface,
    PerfectScrollbarDirective
} from "ngx-perfect-scrollbar";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();

    invalidMemberName:boolean[]= [false,false,false,false];
    memberNameClass:string[]=["input-group","input-group","input-group","input-group"];

    invalidMemberEmail:boolean[]= [false,false,false,false];
    memberEmailClass:string[]=["input-group","input-group","input-group","input-group"];

    invalidMemberPhone:boolean[]= [false,false,false,false];
    memberPhoneClass:string[]=["input-group","input-group","input-group","input-group"];

    @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
    @ViewChild(PerfectScrollbarDirective) directiveRef?: PerfectScrollbarDirective;

    public config: PerfectScrollbarConfigInterface = {};

    team:Team = {
        members:[{
          email:"",
          name:"",
          phone:"",
          leader:true
        },{
          email:"",
          name:"",
          phone:"",
          leader:false
        },{
          email:"",
          name:"",
          phone:"",
          leader:false
        },{
          email:"",
          name:"",
          phone:"",
          leader:false
        }],
        name:"",
        number_participants:1
      };
    
    constructor() { }

    ngOnInit() {}
}
