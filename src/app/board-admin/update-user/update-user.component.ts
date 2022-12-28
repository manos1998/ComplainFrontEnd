import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  currentId:number = 0;
  fileSize: number = 0;
  file: any;
  imageSrc?: string;

  form: User = {
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    pincode: '',
    address: '',
    enable: false,
    roles: [],
  }

  viewMode: boolean= false;

  usersRole: any;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  list = [
    {
      id: 7,
      name: 'User',
      checked: true,
    }
  ]
  currentFile!: File;

  message = '';

  roles?: any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.currentId = Number(param.get('id'));
      this.getById(this.currentId);
    });
    this.userService.getUsersRoles().subscribe({
      next: data => {
        this.list = data;
        console.log(data);
      },
      error: err => {
        console.log(err)
        if (err.error) {
          this.roles = JSON.parse(err.error).message;
        } else {
          this.roles = "Error with status: " + err.status;
        }
      }
    });
  }

  getById(uId: number) {
    this.userService.getUserInfoById(uId).subscribe((data) => {
      console.log(data);
      this.form = data;
      this.usersRole = data.roles;
    });
  }

  get result() {
    return this.list?.filter(item => item.checked);
  }

  onChangeofParent(newGov: string) {
    console.log(newGov);
  }

  saveUser():void {
    const data: User = {
      email: this.form.email,
      username: this.form.username,
      firstname: this.form.firstname,
      lastname: this.form.lastname,
      phone: this.form.phone,
      pincode: this.form.pincode,
      address: this.form.address,
      enable: this.form.enable,
      roles: this.result
    }
    console.log(data);
    // const data = {
    //   username: this.user.username,
    //   email: this.user.email,
    //   password: this.user.password,
    //   firstName: this.user.firstName,
    //   lastName: this.user.lastName,
    //   enabled: this.user.enabled,
    //   roles: this.result
    // }
    // console.log(data);
    this.userService.updateAdminUpdate(this.form.id,data)
    .subscribe({
      next: (res) => {
        this.getById(this.form.id);
        console.log(res.message);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.message = res.message ? res.message : 'The user updated successfully!';
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  onFileChange(event:any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files) {
      const [file] = event.target.files;
      this.currentFile = file;
      this.fileSize = file.size;
      if (this.fileSize > 1048576) {
        console.log(this.fileSize + "Is Greater Then");        
      }
      this.file = file;
      console.log("Is okay " + this.fileSize);
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
    }
  }
}
