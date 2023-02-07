import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GlobalConstants } from 'src/app/common/global-constant';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss']
})
export class GalleryViewComponent implements OnInit {
  sub: any;
  id: any;
  idCheck: any;
  tempGallery:any;
  imageIndex:any;
  imageArray:any=[];
  baseUrl= GlobalConstants.imageBaseUrl;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.idCheck = this.gallery.findIndex((value) => value.folder == this.id);
      console.log(this.idCheck)
      if (this.idCheck == -1) {
        this.router.navigate(['/404']);
      } else {
        this.tempGallery=this.gallery[this.idCheck];
        for (let index = 0; index < this.tempGallery.fileCount; index++) {
          this.imageArray.push(this.baseUrl+this.id+"/"+(index+1)+".webp");
        }
      }
    });
  }

  passedIndex(value:any){
    this.imageIndex=value;
  }

  counter(i: number) {
    return new Array(i);
  }
  
  prevImage(){
    let imagesCount = this.gallery[this.idCheck].fileCount;
    if(this.imageIndex==0){
      this.imageIndex=imagesCount-1;
    }else{
      this.imageIndex--;
    }
    console.log(this.imageIndex)
  }

  nextImage(){
    let imagesCount = this.gallery[this.idCheck].fileCount;
    if(this.imageIndex==imagesCount-1){
      this.imageIndex=0;
    }else{
      this.imageIndex++;
    }
    console.log(this.imageIndex)
  }
  
  gallery = [
    {
      title: "Art & Craft",
      folder: "artandcraft",
      fileCount: 25,
      content:""

    },
    // {
    //   title: "Classroom",
    //   folder: "classroom",
    //   fileCount: 15
    // },
    // {
    //   title: "Computer Lab",
    //   folder: "computerlab",
    //   fileCount: 10
    // },
    // {
    //   title: "Kids Playzone",
    //   folder: "kidsplayzone",
    //   fileCount: 32
    // },
    // {
    //   title: "Library",
    //   folder: "library",
    //   fileCount: 22
    // },
    {
      title: "Paper Cutting",
      folder: "papercutting",
      fileCount: 24,
      content:""
    },
    // {
    //   title: "Science Lab",
    //   folder: "sciencelab",
    //   fileCount: 26
    // },
    {
      title: "Teachers Achievement",
      folder: "teachersachievement",
      fileCount: 3,
      content:"Our Teachers are getting regular trainings and this certificates they achieved in training sessions for there performace. And ankuram family is proud to have learned staff in team."
    },
    // {
    //   title: "Events",
    //   folder: "events",
    //   fileCount: 20
    // },
  ]

}
