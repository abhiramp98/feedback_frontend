import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProvideFeedbackComponent } from './feedback/provide-feedback/provide-feedback.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
{path:'home',component:HomeComponent},
{path:'feedback',component:FeedbackComponent,
children:[
  {path:'providefeedback',component:ProvideFeedbackComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
