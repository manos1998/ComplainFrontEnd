import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserDetailsService } from '../_services/user-details.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  content?: string;

  allComplains: any;

  allFieldWorker: any;

  currentWorkers: any;

  user: any;

  id: any;
  currentComplain: any;
  checked: string = "checked";

  constructor(private userService: UserDetailsService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
    this.userService.getModComBoard().subscribe({
      next: data => {
        this.allComplains = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    })
    this.userService.getModAllFieldWorker().subscribe({
      next: data => {
        this.allFieldWorker = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.allFieldWorker = res.message;
          } catch {
            this.allFieldWorker = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.allFieldWorker = `Error with status: ${err.status}`;
        }
      }
    })
  }
  getUser(uid: any) {
    this.userService.getModComUserBoard(uid).subscribe({
      next: data => {
        this.user = data;
      },
    error: err => {
      if (err.error) {
        try {
          const res = JSON.parse(err.error);
          this.content = res.message;
        } catch {
          this.content = `Error with status: ${err.status} - ${err.statusText}`;
        }
      } else {
        this.content = `Error with status: ${err.status}`;
      }
    }
  })
  }

  updateEmployee(workers: any) {
    this.currentWorkers = workers;
    console.log(this.currentWorkers);    
  }

  info(id: number) {
    console.log("Hello Stark" + id);
  }


  // onCheckboxChange(e) {
    
  //   if (e.target.checked) {
  //     website.push(new FormControl(e.target.value));
  //   } else {
  //      const index = website.controls.findIndex(x => x.value === e.target.value);
  //      website.removeAt(index);
  //   }
  // }
    
  // submit(){
  //   console.log(this.form.value);
  // }
  
  // updateDetails(complain: any, idC: any){
  //   this.userService.updateModComplain(complain,idC).subscribe({
  //     // next: data => {
  //     //   this.user = data;
  //     // },
  //   error: err => {
  //     if (err.error) {
  //       try {
  //         const res = JSON.parse(err.error);
  //         this.content = res.message;
  //       } catch {
  //         this.content = `Error with status: ${err.status} - ${err.statusText}`;
  //       }
  //     } else {
  //       this.content = `Error with status: ${err.status}`;
  //     }
  //   }
  // })
  // }

  // updateSubmitTest(complain: any){
  //   next:(complain) => {
  //     this.router.navigate(["/fruits/home"])
  //   },
  // }
}