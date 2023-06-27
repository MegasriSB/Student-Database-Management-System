import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
declare function gettoggle():any;
@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {
  ngOnInit():void{
    gettoggle();
  }
  pic1:string ="assets/images/featuredimage.png.en";
  pic2:string ="assets/images/mp.jfif";
  pic3:string ="assets/images/cn.jfif";
  pic4:string ="assets/images/toc.jfif";
  pic5:string ="assets/images/ooad.webp";
  pic6:string ="assets/images/gis.jfif";
  pic7:string ="assets/images/pro.png";
  data:any;
 constructor(private auth:AuthService, private router:Router){
 }
 logout(){
  localStorage.clear();
  this.router.navigate(['/login'])
 }
}
