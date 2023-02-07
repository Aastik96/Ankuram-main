import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GlobalConstants } from 'src/app/common/global-constant';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(route:any) {
    this.router.navigate(['message/'+route]);
  }

  image= GlobalConstants.imageBaseUrl;

  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoHeight: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }



  infra: any = [
    {
      title: "Classroom",
      img: "/assets/classroom.png"
    },
    {
      title: "Computer",
      img: "/assets/computer.png"
    },
    {
      title: "Library",
      "img": "/assets/library.png"
    },
    {
      title: "Science",
      img: "assets/chemistry.png"
    },
    {
      title: "Art & Craft",
      img: "assets/art.png"
    },
    {
      title: "Kids Playzone",
      img: "assets/playzone.png"
    },
  ]

}
