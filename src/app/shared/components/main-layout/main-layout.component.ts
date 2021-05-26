import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }

    tolog() {
        this.route.navigate(['/admin'])
    }

  tohome() {
    this.route.navigate(['/'])
  }
}
