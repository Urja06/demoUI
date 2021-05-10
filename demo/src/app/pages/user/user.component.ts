import { Component/*, OnInit*/ } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent /*implements OnInit*/ {

  headers = ["Role", "Qualification"];
  rows = [
    {
      "Role": "Admin",
      "Qualification":"BE"
    },
    {
      "Role": "Customer",
      "Qualification": "B.Com"
    },
    {
      "Role": "Developer",
      "Qualification": "ME"
    }
  ]

  //constructor() { }

  //ngOnInit(): void {
  //}

}
