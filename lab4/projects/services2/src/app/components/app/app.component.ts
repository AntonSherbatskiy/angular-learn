import { Component, inject } from '@angular/core';
import { AppCounterService } from '../../services/app-counter.service';
import { LocalCounterService } from '../../services/local-counter.service';

@Component({
	selector: 'app-root',
	templateUrl: "./app.component.html",
	styleUrl: './app.component.css',
	providers: [LocalCounterService]
})
export class AppComponent {
	protected appCounterService: AppCounterService = inject(AppCounterService);
	protected localCounterService: LocalCounterService = inject(LocalCounterService);
}
