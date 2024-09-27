import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrl: './child.component.css'
})
export class ChildComponent {
    @Input() public userName?: string;
    protected _userAge: number = 0;

    @Input()
    set userAge(age: number) {
        if (age < 0) {
            this._userAge = 0;
        } else if (age > 100) {
            this._userAge = 100;
        } else {
            this._userAge = age;
        }
    }

    get userAge() {
        return this._userAge;
    }

    @Output() onChanged = new EventEmitter<boolean>();

    protected change = (increased: any) => {
        this.onChanged.emit(increased);
    }

    @Output() userNameChange: EventEmitter<string> = new EventEmitter<string>();
    public onNameChange = (model: string) => {
        this.userName = model;
        this.userNameChange.emit(model);
    }
}
