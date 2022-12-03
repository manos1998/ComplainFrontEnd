import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from 'src/app/models/roles.model';
import { User } from 'src/app/models/user.model';
import { UserDetailsService } from 'src/app/_services/user-details.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  // editCategoryForm: any;
  // complainRole:any;
  viewMode:boolean = !true;

  roleList:any = [];

  usersRole: any;

  complainForm: User = {
    firstname: '',
    lastname: '',
    phone: '',
    pincode: '',
    address: '',
    roles: [Roles],
  };
  
  message = '';

  constructor(private route: ActivatedRoute,
    private router: Router, private userService: UserDetailsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
    this.userService.getAllRoles().subscribe((data) => {
      this.roleList = data;
    })
  }
  getById(uId: number) {
    this.userService.getModUserInfoById(uId).subscribe((data) => {
      this.complainForm = data;
      console.log( "Get Data First time" + data);
      this.usersRole = data.roles;
    });
  }

  viewModeChange(){
    this.viewMode = !this.viewMode;
  }

  form = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required,Validators.pattern("[0-9]{10}") ,Validators.minLength(10)]),
    pincode: new FormControl('', [Validators.required,Validators.pattern("[0-9]{1,6}"), Validators.minLength(6)]),
    address: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(120)]),
    roles: new FormArray([],Validators.required)
  });
  
  onCheckboxChange(e: any) {
    const roles: FormArray = this.form.get('roles') as FormArray;
  
    if (e.target.checked) {
      roles.push(new FormControl(e.target.value));
    } else {
       const index = roles.controls.findIndex(x => x.value === e.target.value);
       roles.removeAt(index);
    }
  }

  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    this.userService.updateModComUserBoard(this.complainForm.id,this.form.value)
    .subscribe({
      next: (res) => {
        console.log("Got data second time" + res);
        this.viewMode = !this.viewMode;
        this.getById(this.complainForm.id);
        this.message = res.message ? res.message : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

}