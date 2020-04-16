import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userdata;
firstname;
lastname;
email;
profilepic;
ernnumber;
createddate;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
 
     this.userservice.getProgfile().pipe(first()).subscribe((userprofile: any) => {
       this.userdata = userprofile.data.user
       this.firstname = this.userdata.first_name;
       this.lastname= this.userdata.last_name;
       this.email = this.userdata.email;
       this.profilepic = this.userdata.profile_picture.url;
       this.ernnumber = this.userdata.ern_number;
       this.createddate=this.userdata.created_at;
     
        })

}

}

