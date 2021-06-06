import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from './user/user.component';
import { MessageModule } from '../components/message/message.module';

@NgModule({
    declarations: [HomeComponent, LoginComponent, User],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        MessageModule,
        ReactiveFormsModule,
    ],
    exports: [HomeComponent],
})
export class HomeModule {}
