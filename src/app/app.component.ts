// angular & ionic/angular node modules
import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController, Platform, ToastController } from "@ionic/angular";

// ionic-native & ngx node modules
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

// Services
import { NetworkService } from "./providers/network.service";
import { LanguageService } from "./providers/language.service";
import { StorageService } from "./providers/storage.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  text = "";
  darkMode: boolean;
  public language: string = this.languageService.selected;
  public menuCtrl: MenuController;
  public appPages = [
    {
      title: "News",
      titlefr: "Nouvelles",
      titlesp: "Noticias",
      url: "/app/tabs/news",
      icon: "receipt-outline",
      menuIcon: "menuIconNews",
    },
    {
      title: "Categories",
      titlefr: "Categories",
      titlesp: "Categorias",
      url: "/app/tabs/categories",
      icon: "list-circle-outline",
      menuIcon: "menuIconCategories",
    },
    {
      title: "Favourites",
      titlefr: "Favoris",
      titlesp: "Favoritas",
      url: "/app/tabs/favourites",
      icon: "heart-half-outline",
      menuIcon: "menuIconFavourites",
    },
    {
      title: "About",
      titlefr: "À Propos",
      titlesp: "Sobre esta app",
      url: "/app/tabs/about",
      icon: "bulb-outline",
      menuIcon: "menuIconAbout",
    },
  ];

  constructor(
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public networkService: NetworkService,
    public toastController: ToastController,
    private languageService: LanguageService,
    private storageService: StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.languageService.setInitialAppLanguage();
      
    });
  }


  languageChange() {
    this.languageService.setLanguage(this.language);
  }

  async closeMenu(event: any) {
    await this.menuCtrl.close();
  }
}
