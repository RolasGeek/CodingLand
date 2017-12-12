//Angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Custom Module
import { CategoryModule } from './components/category/category.module';

//Components 
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TopicModalComponent } from './components/topic/topic-modal/topic-modal.component';
import { RegisterComponent } from './components/register/register.component';
import { PostModalComponent } from './components/topic/post-modal/post-modal.component';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { CategoryModalComponent } from './components/category/category-modal/category-modal.component';

//Service
import { CategoryService } from './services/category/category.service';
import { AuthService } from './services/auth/auth.service';

// Http interceptor
import { TokenInterceptor } from './utils/token.interceptor';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent  },
    { path: 'profile', component: ProfileComponent },
    {  path: '', component: MainPageComponent }
];


@NgModule( {
    declarations: [
        AppComponent,
        MenuBarComponent,
        LoginComponent,
        MainPageComponent,
        TopicModalComponent,
        RegisterComponent,
        PostModalComponent,
        ProfileComponent,
        InfoModalComponent,
        CategoryModalComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(
            appRoutes, {   useHash: true },
            //{ enableTracing: true } // <-- debugging purposes only
        ),
        HttpClientModule,
        NgProgressModule,
        CategoryModule,
        
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {   provide: HTTP_INTERCEPTORS, 
            useClass: NgProgressInterceptor, 
            multi: true },
        AuthService,
        CategoryService
    ],
    bootstrap: [AppComponent]
} )
export class AppModule { }
