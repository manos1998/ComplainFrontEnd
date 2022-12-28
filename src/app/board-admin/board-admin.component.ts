import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;

  users?: any;

  uId?: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
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
    this.userService.getAdminUsersBoard().subscribe({
      next: data => {
        this.users = data;
        console.log(data);
      },
      error: err => {console.log(err)
        if (err.error) {
          this.users = JSON.parse(err.error).message;
        } else {
          this.users = "Error with status: " + err.status;
        }
      }
    });
  }
  deleteUser(uId: any) {
    this.userService.deleteUser(uId).subscribe({
      next: data => {
        console.log(data);
        this.reloadPage();
      }
    })
  }

  reloadPage(){
    window.location.reload()
  }
  
}
