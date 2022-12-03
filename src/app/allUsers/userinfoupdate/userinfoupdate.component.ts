import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserDetailsService } from 'src/app/_services/user-details.service';

@Component({
  selector: 'app-userinfoupdate',
  templateUrl: './userinfoupdate.component.html',
  styleUrls: ['./userinfoupdate.component.css']
})
export class UserinfoupdateComponent {

  // @Input() viewMode = false;

  // @Input() currentUser: User = {
  //   idC: '',
  //   type: '',
  //   details: '',
  //   active: true,
  //   status: '',
  //   feedback: '',
  //   createdOn: '',
  // }

  // myVar: boolean = true;

  // message = '';

  // constructor(
  //   private userService: UserDetailsService,
  //   private route: ActivatedRoute,
  //   private router: Router) { }

  //   ngOnInit(): void {
  //     if (!this.viewMode) {
  //       this.message = '';
  //       this.getUser(this.route.snapshot.params["id"]);
  //     }
  //   }
  
  //   getUser(id: string): void {
  //     this.userService.getUser(id)
  //       .subscribe({
  //         next: (data) => {
  //           this.userService = data;
  //           console.log(data);
  //         },
  //         error: (e) => console.error(e)
  //       });
  //   }

}
