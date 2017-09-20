import {Routes, RouterModule} from '@angular/router';
import {ReviewRatingComponent} from './component/review-rating/review-rating.component';
import {CompanyDetailComponent} from './component/company-detail/company-detail.component';
import {CheckLoginGuard} from './guard/check-login/check-login.guard';
import { MbtiTestComponent } from './component/mbti-test/mbti-test.component';
import {HomeComponent} from "./component/home/home.component";
import {SearchComponent} from "./component/search/search.component";
import {UserDetailComponent} from './component/user-detail/user-detail.component'
import {HeaderComponent} from "./component/header/header.component";
import {AdminComponent} from "./component/admin/admin.component";
import {ListuniversityComponent} from "./component/admin/listuniversity/listuniversity.component";
import {AdduniversityComponent} from "./component/admin/adduniversity/adduniversity.component";

import {NewReviewComponent} from "./component/new-review/new-review.component";

const routing: Routes = [
  {path: '', component: HeaderComponent,
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'university', component: CompanyDetailComponent},
      {path: 'review-rating', component: ReviewRatingComponent},
      {path: 'new-review', component: NewReviewComponent},
      {path: 'search-university', component: SearchComponent},
      {path: 'mbti-test', component: MbtiTestComponent,canActivate: [CheckLoginGuard]},
      {path: 'profile', component: UserDetailComponent, canActivate: [CheckLoginGuard]},
    ]},
  {path: 'admin', component: AdminComponent, children:[
    {path: 'listuniversity', component: ListuniversityComponent},
    {path: 'adduniversity', component: AdduniversityComponent},
  ]},

];
export const appRoutes = RouterModule.forRoot(routing);
