import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatFormFieldModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
