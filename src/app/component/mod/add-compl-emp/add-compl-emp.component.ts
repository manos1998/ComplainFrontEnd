import { Complain } from 'src/app/models/complain.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailsService } from 'src/app/_services/user-details.service';

@Component({
  selector: 'app-add-compl-emp',
  templateUrl: './add-compl-emp.component.html',
  styleUrls: ['./add-compl-emp.component.css']
})
export class AddComplEmpComponent implements OnInit {

  allEngineer: any;

  setEmployeeId: any;

  complainForm: Complain = {
    idC: 4,
    status: 'WIP',
    active: false,
    workers: '',
  };
  constructor(private route: ActivatedRoute,
    private router: Router,private userService: UserDetailsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
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

  getById(id: number) {
    this.userService.getModComplainById(id).subscribe((data) => {
      this.complainForm = data;
    });
  }

  update() {
    this.userService.updateModComplainById(this.setEmployeeId,this.complainForm.idC)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/mod"]);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  setEmployee(id: number){
    this.setEmployeeId = id;
    console.log(id);
  }

}