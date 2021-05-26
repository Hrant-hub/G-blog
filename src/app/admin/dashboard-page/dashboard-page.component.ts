import {Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {PostsService} from '../../shared/posts.service';
import {Post} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})

export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = []
  pSub: Subscription
  dSub: Subscription
  searchStr = ''
  searchfield = 'title'
  constructor(
    private postsService: PostsService,
    private alert: AlertService,
    public auth: AuthService,
    public router: Router,
    public render: Renderer2,
    public el: ElementRef
    ) {

    this.render.addClass(this.el.nativeElement,'navbargo')
  }


  ngOnInit() {

    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts
    })


  }
  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }

  remove(id: string) {
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id)
      this.alert.warning('Post Deleted')
    })
  }



  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.dSub) {
      this.dSub.unsubscribe()
    }
  }

}
