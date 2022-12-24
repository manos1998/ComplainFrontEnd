import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complain } from 'src/app/models/complain.model';
import { User } from 'src/app/models/user.model';
import { UserDetailsService } from 'src/app/_services/user-details.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  viewMode:boolean = false;
  viewModeComplain:boolean = false;

  currentRole: any;
  currentComplain: Complain = {};
  currentIndex = -1;

  assignComplain: any;

  currentId:number = 0;

  roleList:any = [];

  userComplain: any;

  usersRole: any;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  user: User = {
    id: 0,
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    pincode: '',
    address: '',
  }
  
  submitted = false;

  list = [
    {
      id: 6,
      name: 'User',
      checked: true,
    }
  ]

  message = '';

  constructor(private route: ActivatedRoute,
    private router: Router, private userService: UserDetailsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.currentId = Number(param.get('id'));
      this.getById(this.currentId);
    });
    this.userService.getAllRoles().subscribe((data) => {
      this.list = data;
    })
    this.userService.getModUserAllCom(this.currentId).subscribe((data) => {
      this.assignComplain = data;
    })
  }
  getById(uId: number) {
    this.userService.getModUserInfoById(uId).subscribe((data) => {
      console.log(data);
      this.user = data;
      this.usersRole = data.roles;
      this.userComplain = data.userComplain;
    });
  }

  setActiveComplain(complain: Complain, index: number): void {
    this.currentComplain = complain;
    console.log(complain);
    this.currentIndex = index;
  }

  viewModeComplainChange() {
    this.viewModeComplain = !this.viewModeComplain;
  }

  viewModeChange(){
    this.viewMode = !this.viewMode;
  }

  get result() {
    return this.list?.filter(item => item.checked);
  }

  saveUser():void {

    const data = {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      phone: this.user.phone,
      pincode: this.user.pincode,
      address: this.user.address,
      roles: this.result
    }
    console.log(data);
    this.userService.updateModComUserBoard(this.user.id,data)
    .subscribe({
      next: (res) => {
        this.viewMode = !this.viewMode;
        this.getById(this.user.id);
        this.message = res.message ? res.message : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }
}