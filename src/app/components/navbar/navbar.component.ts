import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  ontop:any = true;
  @HostListener('window:scroll', ['$event']) 
    doSomething(event: any) {
      if(window.pageYOffset !=0){
        this.ontop=false;
      }else{
        this.ontop=true;
      }
    }
  constructor() { }

  ngOnInit(): void {
  }

}
