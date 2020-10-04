import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '', 'pathMatch': 'full' },
  { path: 'formulario', loadChildren: () => 
    import('./lazyform/lazyform.module').then(m => m.LazyformModule) 
  },
  { path: 'home', loadChildren: () => 
    import('./main/main.module').then(m => m.MainModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
