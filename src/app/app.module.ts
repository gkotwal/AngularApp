import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderComponent } from './loader/loader.component';
import { LoaderDirective } from './loader/loader.directive';
import { StepsComponent } from './components/steps/steps.component';
import { StepTemplateComponent } from './components/step-template/step-template.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { CompletePageComponent } from './pages/complete-page/complete-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoaderDirective,
    StepsComponent,
    StepTemplateComponent,
    FormPageComponent,
    CompletePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
