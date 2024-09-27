import { Component } from '@angular/core';
import { Post } from '../../models/post.model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'BlogComponents';
    protected posts: Post[] = [
        {title: 'Вивчаю компоненти', text: 'Створюю проект "Блог"', id: 1},
        {title: 'Вивчаю директиви', text: 'Все ще створюю проект "Блог"', id: 2}
    ];
    protected search?: string;

    protected updatePosts = (post: Post) => {
        const lastPostIndex = this.posts[0].id;
        post.id = lastPostIndex! + 1;
        this.posts.unshift(post);
        console.log("Post: ", post);
    }

    protected deletePost = (id:number) => {
        this.posts=this.posts.filter(p=>p.id!==id)
    }
}
export { Post };

