import { Pipe, PipeTransform } from "@angular/core";
import { Post } from "../components/app/app.component";

@Pipe({
    name: "filter",
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(posts: Post[], search: string = ''): Post[] {
        if (!search.trim()) {
            return posts;
        }
        return posts.filter(post => {
            return post.title.toLowerCase().includes(search.toLowerCase())
        })
    }

}
