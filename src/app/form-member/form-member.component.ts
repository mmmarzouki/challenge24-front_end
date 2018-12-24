import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'app/models/team';
import { Member } from 'app/models/member';

@Component({
  selector: 'app-form-member',
  templateUrl: './form-member.component.html',
  styleUrls: ['./form-member.component.scss']
})
export class FormMemberComponent implements OnInit {

  @Input()
  memberEmailClass:string;
  @Input()
  invalidMemberEmail:boolean;

  @Input()
  memberPhoneClass:string;
  @Input()
  invalidMemberPhone:boolean;

  @Input()
  memberNameClass:string;
  @Input()
  invalidMemberName:boolean;

  @Input()
  number:number;
  @Input()
  member:Member;
  @Input()
  team:Team;
  
  constructor() { }

  ngOnInit() {
  }

}
