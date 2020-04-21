import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productimg: any;
  productlist;

  constructor(private userservice: UserService, private route: Router) { }

  ngOnInit(): void {
    this.userservice.itemMasterListing().subscribe((data:any)=>{
this.productlist = data.data.category.name;
this.productimg = data.data.category.image.avatar.url
console.log(data.data.category.id)
    })
  }
  itemmaster(){
    this.route.navigate(['itemmaster'])
      }
}
