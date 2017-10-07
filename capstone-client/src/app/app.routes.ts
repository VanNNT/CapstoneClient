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
import {EditUniversityComponent} from "./component/admin/edit-university/edit-university.component";
import {EditScoreComponent} from "./component/admin/edit-score/edit-score.component";
import {ShowNewsComponent} from "./component/show-news/show-news.component";
import {AddNewsComponent} from "./component/admin/add-news/add-news.component";
import {CheckRoleGuard} from "./guard/check-role/check-role.guard";

const routing: Routes = [
  {path: '', component: HeaderComponent,
    children:[
      {path: 'view-news', component: ShowNewsComponent},
      {path: 'home', component: HomeComponent},
      {path: 'university/:id', component: CompanyDetailComponent},
      {path: 'review-rating/:id', component: ReviewRatingComponent},
      {path: 'new-review/:id', component: NewReviewComponent},
      {path: 'search-university', component: SearchComponent},
      {path: 'mbti-test', component: MbtiTestComponent,canActivate: [CheckLoginGuard, CheckRoleGuard]},
      {path: 'profile', component: UserDetailComponent, canActivate: [CheckLoginGuard]},
    ]},
  {path: 'admin', component: AdminComponent,canActivate: [CheckLoginGuard],
    children: [
      {path: 'list-university', component: ListuniversityComponent},
      {path: 'add-university', component: AdduniversityComponent},
      {path: 'edit-university/:id', component: EditUniversityComponent},
      {path: 'edit-score/:id', component: EditScoreComponent},
      {path: 'add-news', component: AddNewsComponent}
  ]},

];
export const appRoutes = RouterModule.forRoot(routing);
