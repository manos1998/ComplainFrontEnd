import { Component } from '@angular/core';
import { UserDetailsService } from 'src/app/_services/user-details.service';

@Component({
  selector: 'app-all-engineer',
  templateUrl: './all-engineer.component.html',
  styleUrls: ['./all-engineer.component.css']
})
export class AllEngineerComponent {
  allEngineer: any;

  setEmployeeId: any;

  constructor(private userService: UserDetailsService) { }

  ngOnInit(): void {
    this.userService.getAllEngineer().subscribe({
      next: data => {
        this.allEngineer = data;
        console.log(data);
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.allEngineer = res.message;
          } catch {
            this.allEngineer = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.allEngineer = `Error with status: ${err.status}`;
        }
      }
    })
  }

  info() {
    console.log("Hello Stark");
  }

}
