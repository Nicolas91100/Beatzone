import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  users;
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getAllUser().subscribe((response: Response) => {
      this.users = response;
    });
  }
  onDeleteUser(users) {
    this.service.deleteUser(users._id).subscribe((response: Response) => {
      console.log(response);
      const index = this.users.indexOf(users);
      this.users.splice(index, 1);
    });
  }
}
