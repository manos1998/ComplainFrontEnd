import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complain } from 'src/app/models/complain.model';
import { ComplainService } from 'src/app/_services/complain.service';

@Component({
  selector: 'app-complain-details',
  templateUrl: './complain-details.component.html',
  styleUrls: ['./complain-details.component.css']
})
export class ComplainDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentComplain: Complain = {
    idC: '',
    type: '',
    details: '',
    active: true,
    status: '',
    feedback: '',
    createdOn: '',
  }

  myVar: boolean = true;

  message = '';

  constructor(
    private complainService: ComplainService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      if (!this.viewMode) {
        this.message = '';
        this.getComplain(this.route.snapshot.params["id"]);
      }
    }

    savefeedback(): void {
      console.log(this.currentComplain.feedback + this.currentComplain.idC);
    }
  
    getComplain(id: string): void {
      this.complainService.get(id)
        .subscribe({
          next: (data) => {
            this.currentComplain = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }
  }
