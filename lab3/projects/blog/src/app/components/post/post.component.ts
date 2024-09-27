import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrl: './post.component.css'
})
export class PostComponent implements OnDestroy {
    @Input() public myPost!: Post;
    @Output() public onPostRemove: EventEmitter<number> = new EventEmitter<number>();

    protected removePost = () => {
        this.onPostRemove.emit(this.myPost.id);
    }

    ngOnDestroy(): void {
        console.log("OnDestroy");
    }
}
