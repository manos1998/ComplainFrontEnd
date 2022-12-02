import { Component } from '@angular/core';
import { UserDetailsService } from 'src/app/_services/user-details.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {
  allUsers: any;

  setEmployeeId: any;

  constructor(private userService: UserDetailsService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: data => {
        this.allUsers = data;
        console.log(data);
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.allUsers = res.message;
          } catch {
            this.allUsers = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.allUsers = `Error with status: ${err.status}`;
        }
      }
    })

  }

}
