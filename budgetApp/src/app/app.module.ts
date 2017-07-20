import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/index';
import { EffectsModule } from '@ngrx/effects';
import { BudgetEffects } from './store/effects/budget';
 
import { Socket } from './services/socket.server';
import { BudgetListComponent } from './components/budgetList/budget-list';
import { BudgetComponent } from './components/budget/budget';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BudgetListComponent,
    BudgetComponent 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore(reducer),
    EffectsModule.run(BudgetEffects),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Socket,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
