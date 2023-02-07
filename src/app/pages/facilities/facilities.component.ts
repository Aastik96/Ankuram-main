import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constant';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {

  image = GlobalConstants.imageBaseUrl;
  lorem = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  infrastructure = [
    {
      title: "Pollution free campus",
      content: this.lorem,
      img: "/assets/airPollution.svg"
    },
    {
      title: "Bus facility",
      content: this.lorem,
      img: "/assets/bus.svg"
    },
    {
      title: "Buses with lady attender",
      content: this.lorem,
      img: "assets/ladyEmployee.svg"
    },
    {
      title: "Drinking water with RO",
      content: this.lorem,
      "img": "/assets/waterPurifier.svg"
    },
    {
      title: "Two teachers in one class for pre primary section",
      content: this.lorem,
      img: "assets/teacher.svg"
    },
    {
      title: "Biometric attendance of Kids",
      content: this.lorem,
      img: "assets/thumbPrint.svg"
    },
    {
      title: "Whole school under cctv surveillance.",
      content: this.lorem,
      img: "assets/cctv.svg"
    }
  ]
}
