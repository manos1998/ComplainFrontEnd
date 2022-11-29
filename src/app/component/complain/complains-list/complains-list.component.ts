import { StorageService } from 'src/app/_services/storage.service';
import { ComplainService } from 'src/app/_services/complain.service';
import { Component, OnInit } from '@angular/core';
import { Complain } from 'src/app/models/complain.model';

@Component({
  selector: 'app-complains-list',
  templateUrl: './complains-list.component.html',
  styleUrls: ['./complains-list.component.css']
})
export class ComplainsListComponent implements OnInit {
  complains?: Complain[];
  currentComplain: Complain = {};
  currentIndex = -1;
  type = '';
  currentUser: any;

  constructor(private complainService: ComplainService, private storageService:StorageService) { }

  ngOnInit(): void {
    this.retriveComplains();
    this.currentUser = this.storageService.getUser();
  }
  retriveComplains() {
    this.complainService.getAll()
    .subscribe({
      next: (data) => {
        this.complains = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    })
  }

  refreshList(): void {
    this.retriveComplains();
    this.currentComplain = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(complain: Complain, index: number): void {
    this.currentComplain = complain;
    this.currentIndex = index;
  }

}