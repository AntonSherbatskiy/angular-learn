import {
    AfterContentChecked,
    AfterContentInit, AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit {
    @Input() name?: string;
    protected count: number = 1;

    ngOnInit() {
        this.log(`ngOnInit`);
    }

    ngOnChanges() {
        this.log(`OnChanges`);
    }

    ngDoCheck() {
        this.log(`ngDoCheck`);
    }

    ngAfterViewInit() {
        this.log(`ngAfterViewInit`);
    }

    ngAfterViewChecked() {
        this.log(`ngAfterViewChecked`);
    }

    ngAfterContentInit() {
        this.log(`ngAfterContentInit`);
    }

    ngAfterContentChecked() {
        this.log(`ngAfterContentChecked`);
    }

    private log(msg: string) {
        console.log(this.count + ". " + msg);
        this.count++;
    }
}
