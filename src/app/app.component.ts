import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Notes';

  constructor(private translate: TranslateService) {
      console.log(translate.data);
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }

}
