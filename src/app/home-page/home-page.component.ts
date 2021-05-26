import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {PostsService} from '../shared/posts.service';
import {Observable} from 'rxjs';
import {Post} from '../shared/interfaces';
import {Router} from '@angular/router';
import {LoginPageComponent} from '../admin/login-page/login-page.component';
import {AuthService} from '../admin/shared/services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  posts$: Observable<Post[]>

  constructor(private postsService: PostsService, private route: Router,public render: Renderer2,public el: ElementRef) {
  }


  ngOnInit() {

    $(window).on("scroll load resize", function() {
      let intoH = $('#intro').innerHeight()
      let scrollPos = $(this).scrollTop()
      if(scrollPos > intoH) {
        $("#headers").addClass("fixed")
      } else {$("#headers").removeClass("fixed")}
    })
    this.posts$ = this.postsService.getAll()
  }

    navlog() {
        this.route.navigate(['/admin/login'])
    }
    navreg() {
      this.route.navigate(['/admin/register'])
    }

  createpost() {
    this.route.navigate(['/admin/create'])
  }

    @ViewChild('hello', { static: false }) divHello: ElementRef;
    show = true
   fornav() {
     if(this.show){
      this.render.addClass(this.divHello.nativeElement, 'shows')
      }else {
       this.render.removeClass(this.divHello.nativeElement, 'shows')
     }
   }

    forscroll() {
        $("html, body").animate({scrollTop: 0}, "slow")
    }
    forscrollpost() {

        $("html, body").animate({scrollTop: 700}, "slow")
    }
    forscrollabout() {

        $("html, body").animate({scrollTop: 1600}, "slow")
    }
}
