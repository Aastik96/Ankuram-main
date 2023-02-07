import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constant';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})
export class InfrastructureComponent implements OnInit {

  image= GlobalConstants.imageBaseUrl;
  lorem=""
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(route:any) {
    this.router.navigate(['gallery/'+route]);
  }
  
  infrastructure=[
    {
      title: "Art & Craft",
      folder: "artandcraft",
      content:this.lorem,
      img: "assets/art.png"
    },
    {
      title: "Classroom",
      folder: "classroom",
      content:this.lorem,
      img: "/assets/classroom.png"
    },
    {
      title: "Computer Lab",
      folder: "computerlab",
      content:this.lorem,
      img: "/assets/computer.png"
    },
    {
      title: "Kids Playzone",
      folder: "kidsplayzone",
      content:this.lorem,
      img: "assets/playzone.png"
    },
    {
      title: "Library",
      folder: "library",
      content:this.lorem,
      "img": "/assets/library.png"
    },
    {
      title: "Science Lab",
      folder: "sciencelab",
      content:this.lorem,
      img: "assets/chemistry.png"
    },
    {
      title: "Music & Dance",
      folder: "musicanddance",
      content:this.lorem,
      img: "assets/dance.png"
    },
    {
      title: "Sports & Yoga",
      folder: "sportsandyoga",
      content:this.lorem,
      img: "assets/meditation.png"
    }
  ]

}
