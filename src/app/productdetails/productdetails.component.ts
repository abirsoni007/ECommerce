import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
productdetails;
name;
img
  constructor(private user: UserService, private route:Router) { }

  ngOnInit(): void {
    this.user.itemMasteDetails().subscribe((data:any)=>{
      this.name = data.data.category.name;
      this.img = data.data.category.image.avatar.url
      console.log(this.productdetails)
    })
  }
 
}
