import { Component, OnInit } from '@angular/core';
declare function gettoggle():any;
@Component({
  selector: 'app-stuoverallpro',
  templateUrl: './stuoverallpro.component.html',
  styleUrls: ['./stuoverallpro.component.css']
})
export class StuoverallproComponent implements OnInit {
  ngOnInit(): void {
    gettoggle();

}
}
