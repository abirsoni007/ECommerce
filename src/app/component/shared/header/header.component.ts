
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    localStorage.clear();
    this.route.navigate(['login'])


  }
  onProfile(){
this.route.navigate(['profile'])
  }

}
