import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.css']
})
export class DeshboardComponent implements OnInit {
  hb;
  selected = '';
 constructor(private user: UserService, private route: Router) { }

  ngOnInit(): void {
    this.user.onList().pipe(first()).subscribe((data: any) => {

      let res = data

      this.hb = data.data.division
      console.log(this.hb)

    });

  }
  onSelectItem(event) {

    this.selected = event.target.value
    console.log(this.selected)


  }
  onUpdate() {
    this.user.onUpdateDivision(this.selected).pipe(first()).subscribe(res => {
      let rest = res;
      console.log(rest)
          this.route.navigate(['categorylist'])
    })
  }
}