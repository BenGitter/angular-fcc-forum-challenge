import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    window.addEventListener("message", this.receiveMessage.bind(this), false);
  }

  route(){
    var wnd = window.open("api/login");
  }

  receiveMessage(event){
    if(event.origin !== "http://localhost:8080"){
      console.log(event.origin);
      return false;
    }

    console.log(event.data);
    this.router.navigate(["/timer"]);
  }

}
