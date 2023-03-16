import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadManifest, loadRemoteEntry } from '@angular-architects/module-federation';
import { FooterComponent } from './footer/footer.component';
import { NoaccessComponent } from './noaccess/noaccess.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: HomeComponent },
  { path: 'footer', component: FooterComponent },

  {
    path: 'Auth',
    loadChildren: () =>
         loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './Module'
        })
        .then(m => m.AuthModule)
},



{ path: '**', component: NoaccessComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
