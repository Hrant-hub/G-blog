import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../shared/interfaces';
import {PostsService} from '../../shared/posts.service';
import {AlertService} from '../shared/services/alert.service';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private postsService: PostsService,
    private alert: AlertService,
    public auth: AuthService,
    public router: Router
  ) {}

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required,Validators.maxLength(20)]),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, [Validators.required, Validators.maxLength(20)])
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const post: Post = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date()
    }

    this.postsService.create(post).subscribe(() => {
      this.form.reset()
      this.alert.success('Post Created')
    })

  }

}
