import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categorie;
  src;
  defimage:string ;
  selecteditem
  constructor(private userservice: UserService, private route: Router) { 
    this.defimage='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png' ;
  }

  ngOnInit(): void {
    this.userservice.onCategoryList().pipe(first()).subscribe((data: any) => {
      
            
        this.categorie = data.data.categories
        console.log(this.categorie)
    
        
    })
    
  }
  onSelectItem(event){
this.selecteditem = event.target.value 
    console.log(this.selecteditem)
  }

  sub(){
    this.route.navigate(['sub'])
  }
}
