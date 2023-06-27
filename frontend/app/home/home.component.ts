import { Component, OnInit } from '@angular/core';
declare function getToday():any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  ngOnInit():void{
    getToday();
  }
  home1:string ="assets/images/logo.png";
  home2:string ="assets/images/Ellipse 1.png";
  home3:string ="assets/images/Ellipse 2.png";
  home4:string ="assets/images/Ellipse 5.png";
  home5:string ="assets/images/Ellipse 6.png";
  home6:string ="assets/images/cse.jpg";
  home7:string ="assets/images/ECE.jpg";
  home8:string ="assets/images/civil.png";
  home9:string ="assets/images/EEE.jpeg";
  home10:string ="assets/images/Mech.jpeg";
  home11:string ="assets/images/IT.jpg";
  home12:string ="assets/images/main.png";
}
