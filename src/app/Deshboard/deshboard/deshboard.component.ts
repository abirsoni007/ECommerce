import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { first } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.css']
})
export class DeshboardComponent implements OnInit {
  hb;
  selected = '';
  
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.onList().pipe(first()).subscribe((data:any) => {
      // console.log(data.division[1].id)
      let res = data

      this.hb = res['data']['division']

    //   this.hb.forEach(element => {
    //     console.log(element.id);
    //     console.log(element.name);
    //     console.log(element.description)

    //   });
    });

  }
  onSelectItem(event) {

  this.selected = event.target.value
    console.log(this.selected)
  }
onUpdate(){
  this.user.onUpdateDivision(this.selected).pipe(first()).subscribe(res=>{})
}
}