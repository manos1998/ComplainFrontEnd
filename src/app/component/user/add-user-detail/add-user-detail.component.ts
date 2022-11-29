import { UserDetailsService } from 'src/app/_services/user-details.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user-detail',
  templateUrl: './add-user-detail.component.html',
  styleUrls: ['./add-user-detail.component.css']
})
export class AddUserDetailComponent implements OnInit {


//   @Input() viewMode = false;

//   @Input() currentComplain: User = {
//     username: '',
//     email: '',
//     password: '',
//     firstname: '',
//     lastname: '',
//     phone: '',
//     pincode: '',
//     address: '',
//     roles: '',
//   }
// }

//   myVar: boolean = true;

//   message = '';

//   constructor(
//     private userService: UserService,
//     private route: ActivatedRoute,
//     private router: Router) { }

//     ngOnInit(): void {
//       if (!this.viewMode) {
//         this.message = '';
//         this.getComplain(this.route.snapshot.params["id"]);
//       }
//     }
  
//     getComplain(id: string): void {
//       this.userService.get(id)
//         .subscribe({
//           next: (data) => {
//             this.currentComplain = data;
//             console.log(data);
//           },
//           error: (e) => console.error(e)
//         });
//     }
  





  // user: User = {
  //   id: '',
  //   username: '',
  //   email: '',
  //   password: '',
  //   firstname: '',
  //   lastname: '',
  //   phone: '',
  //   pincode: '',
  //   address: '',
  //   roles: '',
  // }
  submitted = false;
  // currentUser?: any;
  // message = '';
  // currentUserData?: any;
  // id = this.currentUser?.id;


  // // constructor(private userService: userService,private storageService: StorageService) { }

  // constructor(private userService: UserService,private storageService: StorageService,private userDetailsService :UserDetailsService ) { }

  ngOnInit(): void {
    // this.currentUser = this.storageService.getUser();
  }

  // // saveUserDetails(): void {
  // //   const data = {
  // //     firstname: this.currentUser?.firstname,
  // //     lastname: this.currentUser?.lastname,
  // //     phone: this.currentUser?.phone,
  // //     pincode: this.currentUser?.pincode,
  // //     address: this.currentUser?.address,
  // //   };

  // //   this.message = '';

  // //   // this.userService.updateUserDetails(this.currentUser?.id, data)
  // //   //   .subscribe({
  // //   //     next: (res) => {
  // //   //       console.log(res);
  // //   //       this.submitted = true;
  // //   //       this.message = res.message ? res.message : 'This tutorial was updated successfully!';
  // //   //     },
  // //   //     error: (e) => console.error(e)
  // //   //   });
  // // }

  // newTutorial(): void {
  //   this.submitted = false;
  //   this.user = {
  //     id: '',
  //     username: '',
  //     email: '',
  //     password: '',
  //     firstname: '',
  //     lastname: '',
  //     phone: '',
  //     pincode: '',
  //     address: '',
  //     roles: '',
  //   };
  // }

  // getUser(id: string): void {
  //   this.userDetailsService.get(id)
  //     .subscribe({
  //       next: (data) => {
  //         this.currentUser = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }


}
