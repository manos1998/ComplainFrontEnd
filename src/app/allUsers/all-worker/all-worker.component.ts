import { Component } from '@angular/core';
import { UserDetailsService } from 'src/app/_services/user-details.service';

@Component({
  selector: 'app-all-worker',
  templateUrl: './all-worker.component.html',
  styleUrls: ['./all-worker.component.css']
})
export class AllWorkerComponent {

  allEngineer: any;

  setEmployeeId: any;

  constructor(private userService: UserDetailsService) { }

  ngOnInit(): void {
    this.userService.getAllFieldWorker().subscribe({
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
}
