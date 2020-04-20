import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
subcategory;
defimage
  constructor(private userservice: UserService, private route: Router) { 
    this.defimage='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png' ;
  }

  ngOnInit(): void {
    this.userservice.onSubcategory().subscribe((data:any)=>{
this.subcategory = data.data.subcategories;
    console.log(this.subcategory)})
  }
productlist(){
  this.route.navigate(['productlist'])
}
}
