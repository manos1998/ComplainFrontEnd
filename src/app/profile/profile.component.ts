import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { StorageService } from '../_services/storage.service';
import { UserDetailsService } from '../_services/user-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  viewMode:boolean = false;
  userContent: any;

  content?: string;
  message = '';

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  viewModeChange(){
    this.viewMode = !this.viewMode;
  }

  submitted = false;

  form: User = {
    id: 0,
    email: '',
    firstname: '',
    lastname: '',
    pincode: '',
    address: '',
  }


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
        this.form = data;
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
  // updateTutorial(): void {
  //   this.message = '';

  //   this.userService.update(this.currentUser.id, this.userContent)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.message = res.message ? res.message : 'This tutorial was updated successfully!';
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
  saveUser():void {
    const data = {
      firstname: this.form.firstname,
      lastname: this.form.lastname,
      phone: this.form.phone,
      pincode: this.form.pincode,
      address: this.form.address,
    }
    console.log(data);
    this.message = '';
    this.userService.update(this.currentUser.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
}