import { LocalCounterService } from './../../services/local-counter.service';
import { Component, inject } from '@angular/core';
import { AppCounterService } from '../../services/app-counter.service';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css',
    providers: [LocalCounterService]
})
export class CounterComponent {
    protected appCounterService: AppCounterService = inject(AppCounterService);
    protected localCounterService: LocalCounterService = inject(LocalCounterService);
}
