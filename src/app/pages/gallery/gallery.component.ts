import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(route:any) {
    this.router.navigate(['gallery/'+route]);
  }

  gallery = [
    {
      title: "Art & Craft",
      folder: "artandcraft",
      img:'https://ankuraminternationalschool.in/Images/artandcraft/1.webp'
    },
    // {
    //   title: "Classroom",
    //   folder: "classroom",
    //   img:'https://ankuraminternationalschool.in/Images/classroom/1.webp'
    // },
    // {
    //   title: "Computer Lab",
    //   folder: "computerlab",
    //   img:'https://ankuraminternationalschool.in/Images/computerlab/1.webp'
    // },
    // {
    //   title: "Kids Playzone",
    //   folder: "kidsplayzone",
    //   img:'https://ankuraminternationalschool.in/Images/kidsplayzone/1.webp'
    // },
    // {
    //   title: "Library",
    //   folder: "library",
    //   img:'https://ankuraminternationalschool.in/Images/library/1.webp'
    // },
    {
      title: "Paper Cutting",
      folder: "papercutting",
      img:'https://ankuraminternationalschool.in/Images/papercutting/1.webp'
    },
    // {
    //   title: "Science Lab",
    //   folder: "sciencelab",
    //   img:'https://ankuraminternationalschool.in/Images/sciencelab/1.webp'
    // },
    {
      title: "Teachers Achievement",
      folder: "teachersachievement",
      img:'https://ankuraminternationalschool.in/Images/teachersachievement/1.webp'
    },
    // {
    //   title: "Events",
    //   folder: "events",
    //   img:'https://ankuraminternationalschool.in/Images/events/1.webp'
    // },
  ]
}
