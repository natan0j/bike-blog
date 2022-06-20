import { AngularFireDatabase } from '@angular/fire/compat/database';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { CountdownComponent } from './countdown/countdown.component';
import {MatSliderModule} from '@angular/material/slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { EventAssignComponent } from './event-assign/event-assign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase, Database } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { LoginGuardService } from './login-guard.service';
import { LoginMainComponent } from './login-main/login-main.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { EventsComponent } from './events/events.component';
import { list } from 'rxfire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { EventDetailsComponent } from './event-details/event-details.component'; 
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUploadFormComponent } from './file-upload-form/file-upload-form.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';
import { UploadListComponent } from './upload-list/upload-list.component';
@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    EventAssignComponent,
    SignupComponent,
    LoginComponent,
    AdminpanelComponent,
    LoginMainComponent,
    UserpanelComponent,
    EventsComponent,
    EventDetailsComponent,
    FileUploadFormComponent,
    UploadDetailsComponent,
    UploadListComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatSliderModule,
    NgxSliderModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
   
    

  ],
  providers: [
    ScreenTrackingService,UserTrackingService, LoginGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
