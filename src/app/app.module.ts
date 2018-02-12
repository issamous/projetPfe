import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { DirectionsMapDirective } from './map.direction';
import { StateService } from './service/state.service';


@NgModule({
  declarations: [
    AppComponent,
    DirectionsMapDirective
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1Np5J4Vau658dG9QL6EDRWS4Dco3RvZI'
    })
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
