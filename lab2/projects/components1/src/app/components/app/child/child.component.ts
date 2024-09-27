import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrl: './child.component.css'
})
export class ChildComponent {
    protected name: string = "Taras";
    @Input() public userName?: string;
    @Input() public userAge?: number;
}
