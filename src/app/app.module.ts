import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LanguageCardComponent } from './language-card/language-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UrduComponent } from './urdu/urdu.component';
import { ModalComponent } from './shared/modal/modal.component';
import { FrenchComponent } from './french/french.component';

const routes: Routes = [
  { path: 'home', component: LanguageCardComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home/Urdu', component: UrduComponent },
  { path: 'home/French', component: FrenchComponent },
  { path: 'REPOSITORY', component: LanguageCardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LanguageCardComponent,
    UrduComponent,
    ModalComponent,
    FrenchComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
