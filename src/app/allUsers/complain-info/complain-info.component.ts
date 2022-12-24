import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complain } from 'src/app/models/complain.model';
import { ComplainService } from 'src/app/_services/complain.service';
import { UserDetailsService } from 'src/app/_services/user-details.service';

@Component({
  selector: 'app-complain-info',
  templateUrl: './complain-info.component.html',
  styleUrls: ['./complain-info.component.css']
})
export class ComplainInfoComponent {

  currentComplain: Complain = {
    idC: '',
    type: '',
    details: '',
    active: true,
    status: '',
    feedback: '',
    createdOn: '',
  }

  currentId:number = 0;

  message = '';

  constructor(
    private userComaplinService: UserDetailsService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.currentId = Number(param.get('id'));
      this.getComplain(this.currentId);
    });
  }

  getComplain(id: number): void {
    this.userComaplinService.getModComplainById(id)
      .subscribe({
        next: (data) => {
          this.currentComplain = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}