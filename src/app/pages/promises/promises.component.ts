import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css'],
})
export class PromisesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsers().then((users) => {
      console.log(users);
    });
  }

  getUsers() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body: any) => resolve(body.data));
    });
  }
}
