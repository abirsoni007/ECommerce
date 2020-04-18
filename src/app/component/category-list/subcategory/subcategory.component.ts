import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.onSubcategory().subscribe((data:any)=>{
    console.log(data)})
  }

}
