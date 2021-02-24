import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HopComponent} from './components/hop/hop.component';
import {AdoptionPanelComponent} from './components/adoption-panel/adoption-panel.component';

const routes: Routes = [
  {path: '', component: AdoptionPanelComponent},
  {path: 'hop', component: HopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
