import { Component, OnInit } from '@angular/core';
import {} from 'jquery';
import {} from 'materialize-css';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
    $(".button-collapse").sideNav();
  }

}
