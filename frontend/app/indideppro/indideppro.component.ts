import { Component, OnInit } from '@angular/core';
declare function getidp():any;

@Component({
  selector: 'app-indideppro',
  templateUrl: './indideppro.component.html',
  styleUrls: ['./indideppro.component.css']
})
export class IndidepproComponent implements OnInit {
  ngOnInit(){
    getidp();
  }
  idpp1:string ="assets/images/logo.png";
}
