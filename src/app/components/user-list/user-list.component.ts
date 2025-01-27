import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  public users: User[] = [];
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((results )=>{
      this.users = results;
    })
  }

}
