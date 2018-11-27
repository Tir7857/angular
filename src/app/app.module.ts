import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MydirectDirective} from './mydirect.directive';
import {FormsModule} from '@angular/forms';
import { HeroDeteilsComponent } from './hero-deteils/hero-deteils.component'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MydirectDirective,
    HeroDeteilsComponent
  ],
  imports: [ BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
     InMemoryDataService, {dataEncapsulation: false}

    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
