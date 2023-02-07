import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  sub: any;
  id: any;
  idCheck: any;
  tempMessage: any;
  imageArray: any;
  baseUrl: any;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.idCheck = this.message.findIndex((value:any) => value.head == this.id);
      console.log(this.idCheck)
      if (this.idCheck == -1) {
        this.router.navigate(['/404']);
      } else {
        this.tempMessage=this.message[this.idCheck];
      }
    });
  }

  navigateTo(route:any) {
    this.router.navigate(['message/'+route]);
  }

  message = [
    {
      head: "Founder",
    },
    {
      head: "Director",
    },
    {
      head:"Principal"
    }
  ]

}
