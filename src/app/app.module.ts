import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CardModule } from './components/card/card.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HeaderModule,
        FooterModule,
        CardModule,
        AuthModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
