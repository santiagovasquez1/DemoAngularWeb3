import { Component, OnInit } from '@angular/core';
import { We3Service } from 'src/app/service/we3.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title?: string;
  constructor(private web3Service: We3Service) { }

  ngOnInit(): void {

  }

  login() {
    this.web3Service.connectAccount().subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  logout() {
    this.web3Service.logout().subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  leer() {
    this.web3Service.leer().subscribe({
      next: data => {
        console.log(data);
        this.title = data;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
