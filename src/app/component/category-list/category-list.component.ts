import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categorie;
  src;
  img=[]
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.onCategoryList().pipe(first()).subscribe((data: any) => {
      
            
        this.categorie = data.data.categories
        console.log(this.categorie)
         for(var i = 3; i<=6; i++){
          let src=data.data.categories[i].image.avatar.url
    
       this.img.push({
        src
       })
    
       
    }
    console.log(this.img)
         
    })
    
  }
}
