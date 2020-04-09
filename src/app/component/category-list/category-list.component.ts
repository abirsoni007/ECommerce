import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private userservice : UserService) { }

  ngOnInit(): void {
this.userservice.onCategoryList().pipe(first()).subscribe((data: any)=>
  {let res= data;
  console.log(res)}
  )
  }

}
