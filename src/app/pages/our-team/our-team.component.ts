import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constant';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  image = GlobalConstants.imageBaseUrl

  navigateTo(route:any) {
    this.router.navigate(['message/'+route]);
  }


  head = [
    {
      title: "Dr Lokesh Dave",
      subtitle: "Founder",
      content: " Dr lokesh dave MD Homeopathy paediatrics experience of 15 years in Child Development. ",
      image: "assets/founder.jpg"
    },
    {
      title: "Dr Charulata Dave",
      subtitle: "Director",
      content: "BHMS Experience of 15 Years in schooling Affairs. President, Ankuram welfare society,  President Nirashrit Bal Ashram, Ranapur",
      image: "assets/director.jpg"
    },
    {
      title: "Dr. Ritesh Limaye",
      subtitle: "Principal",
      content: "M.A., M.Phil, PhD, B.Ed, Principal Experience of 20 years in various renowned schools as principal.",
      image: "assets/DrRitesh.jpg"
    },
  ]

  teachers = [
    
    {
      title: "Ashish Pandey",
      subtitle: "B.Com, NTT, BP.ED",
      content: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "assets/Ashish.jpg"
    },
    {
      title: "Ashvini Upadhyay Khede",
      subtitle: "M.Sc., B.Ed",
      content: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "assets/Ashvini.jpg"
    },
    
    {
      title: "Mrs Archita Rathore ",
      subtitle: "Pre primary Motivator",
      content: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "assets/MrsArchita.jpg"
    },
    {
      title: "Mrs.Neetu Jain",
      subtitle: "M.A., B.ed",
      content: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "assets/Neetu.jpg"
    },
    {
      title: "Ram lal kurmi",
      subtitle: "M.A., B.ed",
      content: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "assets/Ram.jpg"
    },
    {
      title: "Preeti Tiwari",
      subtitle: "Pre primary Teacher",
      content: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "assets/Preeti.jpg"
    },
    {
      title: "Mrs Sharda Kumawat ",
      subtitle: "M.A.,B.ed",
      content: "I am an ambitious workaholic, but apart from that, pretty simple person.",
      image: "assets/Sharda.jpg"
    },
  ]

}
