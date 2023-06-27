import { Component,OnInit } from '@angular/core';
declare function gettoggle():any;
@Component({
  selector: 'app-department-progress',
  templateUrl: './department-progress.component.html',
  styleUrls: ['./department-progress.component.css']
})
export class DepartmentProgressComponent implements OnInit{
  ngOnInit():void{
    gettoggle();
  }
  home2:string ="assets/images/logo.png";
  ic1:string ="assets/images/cse.jpg";
  ic2:string ="assets/images/ECE.jpg";
  ic3:string ="assets/images/civil.png";
  ic4:string ="assets/images/EEE.jpeg";
  ic5:string ="assets/images/Mech.jpeg";
  ic6:string ="assets/images/IT.jpg";
}
