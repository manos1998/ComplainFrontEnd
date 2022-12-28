import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent  implements OnInit {

  currentId:number = 0;
  viewMode: boolean= false;
  usersRole: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  message = '';
  imageSrc?: string;
  roles?: any;
  fileSize: number = 0;
  file: any;
  liste = [];

  list = [
    {
      id: 7,
      name: 'User',
      checked: true,
    }
  ]
  currentFile!: File;

  form: User = {
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    roles: [],
    enable: false,
  }

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsersRoles().subscribe({
      next: data => {
        this.list = data;
        this.liste = data;
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

  get result() {
    return this.list?.filter(item => item.checked);
  }

  onChangeofParent(newGov: string) {
    console.log(newGov);
  }

  saveUser():void {
    const user: User = {
      id: null,
      email: this.form.email,
      username: this.form.username,
      password: this.form.password,
      firstname: this.form.firstname,
      lastname: this.form.lastname,
      enable: this.form.enable,
      phone: this.form.phone,
      pincode: this.form.pincode,
      address: this.form.address,
      roles: this.result,
    }
    console.log(user);
    this.userService.createUserBoard(user)
      .subscribe({
        next: (res) => {
          console.log(res.message);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.message = res.message ? res.message : 'The user created successfully!';
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