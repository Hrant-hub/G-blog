import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../../shared/interfaces';

@Pipe({
  name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
  transform(posts: Post[], search = '',searchfield: string): Post[] {
    if (!search.trim()) {
      return posts
    }
    return posts.filter(post => {
      return post[searchfield].toLowerCase().includes(search.toLowerCase())
    })
  }

}
