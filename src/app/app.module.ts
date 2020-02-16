import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AplicativosComponent } from "./aplicativos/aplicativos.component";
import { BlogComponent } from "./blog/blog.component";
import { ContatoComponent } from "./contato/contato.component";
import { CurriculoComponent } from "./curriculo/curriculo.component";
import { FerramentasComponent } from "./ferramentas/ferramentas.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ServicosComponent } from "./servicos/servicos.component";
import { VideosComponent } from "./videos/videos.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { ApiService } from "./core/api.service";
import { PortfolioItemComponent } from "./shared/components/portfolio-item/portfolio-item.component";
import { JumbotronComponent } from "./shared/components/jumbotron/jumbotron.component";
import { BannersComponent } from "./shared/components/banners/banners.component";
import { VideoItemComponent } from "./shared/components/video-item/video-item.component";
import { BlogItemComponent } from "./shared/components/blog-item/blog-item.component";
import { BlogHeaderComponent } from "./shared/components/blog-header/blog-header.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AplicativosComponent,
    BlogComponent,
    ContatoComponent,
    CurriculoComponent,
    FerramentasComponent,
    PortfolioComponent,
    ServicosComponent,
    VideosComponent,
    FooterComponent,
    HeaderComponent,
    PortfolioItemComponent,
    JumbotronComponent,
    BannersComponent,
    VideoItemComponent,
    BlogItemComponent,
    BlogHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ApiService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {}
