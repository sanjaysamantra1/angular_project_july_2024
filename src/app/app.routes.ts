import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { teacherGuard } from './guards/teacher.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    {
        path: 'careers',
        component: CareersComponent,
        children: [
            { path: 'permanent', component: PermanentJobsComponent },
            { path: 'contract', component: ContractJobsComponent }
        ]
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [teacherGuard]
    },
    { path: 'productdetails/:id', component: ProductDetailsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'userdetails', component: UserDetailsComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent },
];
