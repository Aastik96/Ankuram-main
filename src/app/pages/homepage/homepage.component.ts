import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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

    {
      title: "Music & Dance",
      folder: "musicanddance",
      // content:this.lorem,
      img: "assets/dance.png"
    },
    {
      title: "Sports & Yoga",
      folder: "sportsandyoga",
      // content:this.lorem,
      img: "assets/meditation.png"
    }
  ]

}
