import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserDetailsService } from '../_services/user-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  userContent: any;

  content?: string;

  message = '';

  constructor(private userService: UserDetailsService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();

    this.userService.getUserBoard().subscribe({
      next: data => {
        this.content = data;
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
    });
    this.userService.getUser(this.storageService.getUser().id).subscribe({
      next: data => {
        this.userContent = data;
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
  updateTutorial(): void {
    this.message = '';

    this.userService.update(this.currentUser.id, this.userContent)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
}