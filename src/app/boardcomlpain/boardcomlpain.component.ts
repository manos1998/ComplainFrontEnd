import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../_services/user-details.service';

@Component({
  selector: 'app-boardcomlpain',
  templateUrl: './boardcomlpain.component.html',
  styleUrls: ['./boardcomlpain.component.css']
})
export class BoardcomlpainComponent implements OnInit {

  content?: string;

  constructor(private userService: UserDetailsService) { }

  ngOnInit(): void {
    this.userService.getUserComplainBoard().subscribe({
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
  }
}
