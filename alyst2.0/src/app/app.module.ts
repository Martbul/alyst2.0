import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PartnersComponent } from './shared/partners/partners.component';
import { ServicesComponent } from './shared/services/services.component';
import { WhyUsComponent } from './shared/why-us/why-us.component';
import { TestemonialsComponent } from './testemonials/testemonials.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { SubscriptionStepsComponent } from './subscription-steps/subscription-steps.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';

import { HeadingComponent } from './shared/heading/heading.component';
import { BookAcallComponent } from './shared/book-acall/book-acall.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    HeadingComponent,
    PartnersComponent,
    ServicesComponent,
    WhyUsComponent,
    TestemonialsComponent,
    ComparisonComponent,
    OurworkComponent,
    SubscriptionStepsComponent,
    PricingComponent,
    FaqComponent,
    BookAcallComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
