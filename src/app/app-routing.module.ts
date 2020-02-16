import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AplicativosComponent } from "./aplicativos/aplicativos.component";
import { BlogComponent } from "./blog/blog.component";
import { ContatoComponent } from "./contato/contato.component";
import { CurriculoComponent } from "./curriculo/curriculo.component";
import { FerramentasComponent } from "./ferramentas/ferramentas.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ServicosComponent } from "./servicos/servicos.component";
import { VideosComponent } from "./videos/videos.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "aplicativos",
    component: AplicativosComponent,
    pathMatch: "full"
  },
  {
    path: "blog",
    component: BlogComponent,
    pathMatch: "full"
  },
  {
    path: "contato",
    component: ContatoComponent,
    pathMatch: "full"
  },
  {
    path: "curriculo",
    component: CurriculoComponent,
    pathMatch: "full"
  },
  {
    path: "ferramentas",
    component: FerramentasComponent,
    pathMatch: "full"
  },
  {
    path: "portfolio",
    component: PortfolioComponent,
    pathMatch: "full"
  },
  {
    path: "servicos",
    component: ServicosComponent,
    pathMatch: "full"
  },
  {
    path: "videos",
    component: VideosComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
