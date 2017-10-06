
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav.component';
import { NavBarComponent } from './nav-bar.component';
import {Routes, RouterModule} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ReporteUrComponent } from './reporte-ur/reporte-ur.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'reportes_ur', component: ReporteUrComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavBarComponent,
    InicioComponent,
    ReporteUrComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
