import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModule } from '../components/message/message.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, MessageModule, ReactiveFormsModule],
    exports: [MessageModule, ReactiveFormsModule],
})
export class SharedModule {}
