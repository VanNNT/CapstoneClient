import {Routes, RouterModule} from '@angular/router';
import {ReviewRatingComponent} from './component/review-rating/review-rating.component';
import {CompanyDetailComponent} from './component/company-detail/company-detail.component';
import {CheckLoginGuard} from './guard/check-login/check-login.guard';
import { MbtiTestComponent } from './component/mbti-test/mbti-test.component';
import {HomeComponent} from "./component/home/home.component";
import {SearchComponent} from "./component/search/search.component";
import {UserDetailComponent} from './component/user-detail/user-detail.component'
import {HeaderComponent} from "./component/header/header.component";

const routing: Routes = [
  {path: '', component: HeaderComponent,
    children:[
      {path: 'home', component: HomeComponent},
      { path: 'review-rating', component: ReviewRatingComponent, canActivate: [CheckLoginGuard]},
      { path: 'company', component: CompanyDetailComponent},
      {path: 'search-university', component: SearchComponent},
      {path: 'mbti-test', component: MbtiTestComponent,canActivate: [CheckLoginGuard]},
      {path: 'profile', component: UserDetailComponent, canActivate: [CheckLoginGuard]}
    ]},
  {path: 'admin', component: ReviewRatingComponent},
];
export const appRoutes = RouterModule.forRoot(routing);
