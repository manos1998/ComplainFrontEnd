import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserDetailsService } from '../_services/user-details.service';

@Component({
  selector: 'app-board-engineer',
  templateUrl: './board-engineer.component.html',
  styleUrls: ['./board-engineer.component.css']
})
export class BoardEngineerComponent implements OnInit {

  content?: string;

  allComplains: any;

  currentWorkers: any;

  checked: string = "checked";

  user: any;

  id: any;

  currentComplain: any;

  currentUser: any;

  constructor(private userService: UserDetailsService, private storageService: StorageService) { }

  ngOnInit(): void {
    console.log(this.storageService.getUser().id);
    this.userService.getEngComBoard(this.storageService.getUser().id).subscribe({
      next: data => {
        this.allComplains = data;
        console.log(data);
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    })
  }
  getUser(uid: any) {
    this.userService.getEngComUserBoard(uid).subscribe({
      next: data => {
        this.user = data;
        console.log(data);
      },
    error: err => {
      if (err.error) {
        try {
          const res = JSON.parse(err.error);
          this.content = res.message;
        } catch {
          this.content = `Error with status: ${err.status} - ${err.statusText}`;
        }
      } else {
        this.content = `Error with status: ${err.status}`;
      }
    }
  })
  }

  updateEmployee(workers: any) {
    this.currentWorkers = workers;
    console.log(this.currentWorkers);    
  }


}