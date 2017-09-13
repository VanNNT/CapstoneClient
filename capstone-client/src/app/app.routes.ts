import {Routes, RouterModule} from '@angular/router';
import {ReviewRatingComponent} from './component/review-rating/review-rating.component';
import {CompanyDetailComponent} from './component/company-detail/company-detail.component';
import {CheckLoginGuard} from './guard/check-login/check-login.guard';
import { MbtiTestComponent } from './component/mbti-test/mbti-test.component';
import {HomeComponent} from "./component/home/home.component";
import {UserDetailComponent} from './component/user-detail/user-detail.component'

const routing: Routes = [
  { path: 'review-rating', component: ReviewRatingComponent, canActivate: [CheckLoginGuard]},
  { path: 'company', component: CompanyDetailComponent},
  {path: 'mbti-test', component: MbtiTestComponent},
  {path: '', component: HomeComponent},
  {path: 'profile', component: UserDetailComponent}
];
export const appRoutes = RouterModule.forRoot(routing);
