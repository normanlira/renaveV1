import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavMainComponent } from './pages/nav-main/nav-main.component';
import { HeaderComponent } from './shared/header/header.component';
import { RegistrationRequestComponent } from './pages/registration-request/registration-request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AdvanceRequestComponent } from './pages/advance-request/advance-request.component';
import { ConsultRequestsComponent } from './pages/consult-requests/consult-requests.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { LiquidationsComponent } from './pages/liquidations/liquidations.component';
import { BestowalComponent } from './pages/bestowal/bestowal.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { BoatsComponent } from './pages/boats/boats.component';
import { ShipownersComponent } from './pages/shipowners/shipowners.component';
import { ReprocessSettlementsComponent } from './pages/reprocess-settlements/reprocess-settlements.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './pages/security/login/login.component';
import { RegisterComponent } from './pages/security/register/register.component';
import { FormsModule } from '@angular/forms';
import { Login1Component } from './pages/security/login1/login1.component';
import { Login2Component } from './pages/security/login2/login2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMainComponent,
    HeaderComponent,
    RegistrationRequestComponent,
    AdvanceRequestComponent,
    ConsultRequestsComponent,
    LiquidationsComponent,
    BestowalComponent,
    ReportsComponent,
    BoatsComponent,
    ShipownersComponent,
    ReprocessSettlementsComponent,
    LoginComponent,
    RegisterComponent,
    Login1Component,
    Login2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
