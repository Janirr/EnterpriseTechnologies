import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CartComponent } from './components/cart/cart.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  {path: 'add-movie', component: MovieFormComponent },
  {path: 'add-category', component: CategoryFormComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
