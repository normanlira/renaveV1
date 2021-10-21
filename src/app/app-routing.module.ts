import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationRequestComponent } from './pages/registration-request/registration-request.component';
import { AdvanceRequestComponent } from './pages/advance-request/advance-request.component';
import { ConsultRequestsComponent } from './pages/consult-requests/consult-requests.component';
import { LiquidationsComponent } from './pages/liquidations/liquidations.component';
import { BestowalComponent } from './pages/bestowal/bestowal.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { BoatsComponent } from './pages/boats/boats.component';
import { ShipownersComponent } from './pages/shipowners/shipowners.component';
import { ReprocessSettlementsComponent } from './pages/reprocess-settlements/reprocess-settlements.component';
import { LoginComponent } from './pages/security/login/login.component';
import { RegisterComponent } from './pages/security/register/register.component';
import { Login1Component } from './pages/security/login1/login1.component';
import { Login2Component } from './pages/security/login2/login2.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent, canActivate: [ AuthorizatedGuard ] },

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: Login2Component },
  { path: 'register', component: RegisterComponent }

  // { path: '', component: LoginComponent,
  //   children : [
  //     { path: 'home', component: HomeComponent },
  //     { path: 'RegistrationRequest', component: RegistrationRequestComponent },
  //     { path: 'AdvanceRequest', component: AdvanceRequestComponent },
  //     { path: 'consultrequests', component: ConsultRequestsComponent },
  //     { path: 'liquidations', component: LiquidationsComponent },
  //     { path: 'bestowal', component: BestowalComponent },
  //     { path: 'reports', component: ReportsComponent },
  //     { path: 'boats', component: BoatsComponent },
  //     { path: 'shipowners', component: ShipownersComponent },
  //     { path: 'reprocessSettlements', component: ReprocessSettlementsComponent },
  //     { path: 'login', component: LoginComponent }
  //     ]
  // }



  // { path: 'home', component: HomeComponent },
  // { path: 'RegistrationRequest', component: RegistrationRequestComponent },
  // { path: 'AdvanceRequest', component: AdvanceRequestComponent },
  // { path: 'consultrequests', component: ConsultRequestsComponent },
  // { path: 'liquidations', component: LiquidationsComponent },
  // { path: 'bestowal', component: BestowalComponent },
  // { path: 'reports', component: ReportsComponent },
  // { path: 'boats', component: BoatsComponent },
  // { path: 'shipowners', component: ShipownersComponent },
  // { path: 'reprocessSettlements', component: ReprocessSettlementsComponent },
  // { path: 'login', component: LoginComponent },


  // { path: 'login', component: LoginComponent },
  // { path: 'registro', component: RegistrationrequestComponent },
  // { path: 'menu', component: MainNavComponent
  // children : [
  //     { path: 'registro', component: RegistrationrequestComponent },
  // ],
//  },

  // { path: 'login', component: LoginComponent },
  // { path: 'registrationrequest', component: RegistrationrequestComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home'}
  // { path: '**', component: Error404Component },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
