import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {NgbdModalContent} from "../components/modal/modal.component";

@Component({
  selector: 'modal-content',
  templateUrl: './modal.component.html'
})

export class ModalComponent {

  constructor(private modalService: NgbModal,private activeModal:NgbActiveModal, private router: Router) {}

  ngOnInit() {
  }

  redirect(){
    this.activeModal.close();
    this.router.navigate(['home']);
  }
}
