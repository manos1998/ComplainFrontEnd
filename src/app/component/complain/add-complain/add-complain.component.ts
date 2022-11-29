import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Complain } from 'src/app/models/complain.model';
import { ComplainService } from 'src/app/_services/complain.service';
import { StorageService } from 'src/app/_services/storage.service';
import { UserDetailsService } from 'src/app/_services/user-details.service';

@Component({
  selector: 'app-add-complain',
  templateUrl: './add-complain.component.html',
  styleUrls: ['./add-complain.component.css']
})
export class AddComplainComponent implements OnInit {

  objDate = Date.now(); 

  userContent: any;

  now = Date.now();
  pipe = new DatePipe('en-US');

  complain: Complain = {
    c_id: '',
    type: '',
    details: '',
    active: true,
    status: 'RAISED',
    feedback: '',
  }
  submitted = false;
  currentUser: any;

  constructor(private userService: UserDetailsService, private complainService: ComplainService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser().id;

    this.userService.get(this.storageService.getUser().id).subscribe({
      next: data => {
        this.userContent = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.userContent = res.message;
          } catch {
            this.userContent = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.userContent = `Error with status: ${err.status}`;
        }
      }
    })
  }

  saveComplain(): void {
    const data = {
      type: this.complain.type,
      details: this.complain.details,
      active: this.complain.active,
      status: this.complain.status,
    };
    console.log(data);
    this.complainService.create(this.storageService.getUser().id,data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newComplain(): void {
    this.submitted = false;
    this.complain = {
      type: '',
      details: '',
      active: true,
      status: '',
      feedback: '',
    };
  }
}