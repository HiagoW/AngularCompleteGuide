import { NgModule, inject } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipesResolverService } from "./recipes-resolver.service";

const routes: Routes = [
    { path: '', 
        component: RecipesComponent,
        canActivate: [() => inject(AuthGuard).canActivate()],
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: {_: () => inject(RecipesResolverService).resolve()} },
            { path: ':id/edit', component: RecipeEditComponent, resolve: {_: () => inject(RecipesResolverService).resolve()} },
        ] 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}