import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from "rxjs";
import { Post } from "../../models/post.model";

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {
    ngOnInit(): void {
        this.myDate$.subscribe(date => {
            this.date_post = date
        });
    }

    protected title!: string;
    protected text!: string;
    protected myDate$: Observable<Date> = new Observable(obs => {
        setInterval(() => {
            obs.next(new Date())
        }, 1000)
    })
    protected date_post!: Date;

    @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>();

    addPost() {
        if (this.title.trim() && this.text.trim()) {
            const post: Post = {
                title: this.title,
                text: this.text,
                date: this.date_post
            }
            this.onAddPost.emit(post);
            console.log('New post', post);
            this.title = this.text = ''; // очищення полів
        }
    }
}
