import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { 
        path: '',
        component: MasterPageComponent,
        children: [
            { 
                path: 'clientes', component: ClientesComponent
            },
            { path: '', redirectTo: 'clientes', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: "" }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
