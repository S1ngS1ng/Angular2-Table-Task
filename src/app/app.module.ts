import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { DataResource } from './data-resource.service';
import { DataPipe } from './data-pipe';

import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        DataPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AlertModule,
        DatepickerModule,
        DropdownModule
    ],
    providers: [DataResource],
    bootstrap: [AppComponent]
})
export class AppModule {
}
