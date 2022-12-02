import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailsService } from 'src/app/_services/user-details.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  complainForm: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private userService: UserDetailsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
  getById(uId: number) {
    this.userService.getModUserInfoById(uId).subscribe((data) => {
      this.complainForm = data;
    });
  }
}


