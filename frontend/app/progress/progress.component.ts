import { Component,OnInit  } from '@angular/core';
declare function getprogress():any;
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit{
  router: any;
  ngOnInit():void{
    getprogress();
  }
  pro1:string ="assets/images/Avathar.png";
  pro2:string ="assets/images/engg.jpg";  
}

