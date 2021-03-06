import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loadAPI: Promise<any>;
  show_signin_button = new Subject<any>();
  public year;


  constructor(private afAuth: AngularFireAuth) {
    console.log("init");
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.show_signin_button.next(false);
      } else {
        this.show_signin_button.next(true);
      }
    });
    this.checkUser();
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
    this.year = new Date().getFullYear();
    const node = document.createElement('style');
    node.type = 'text/css';
    node.innerHTML = "html {background: #233142;}";
    document.getElementsByTagName('head')[0].appendChild(node);
    console.log("app.component initialised")
  }

  public checkUser() {
    if (this.afAuth.auth.currentUser && !this.afAuth.auth.currentUser.isAnonymous) {
      this.show_signin_button.next(false);
    } else {
      this.show_signin_button.next(true);
    }
  }

  public loadScript() {
    let isFound = false;
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes('loader')) {
        isFound = true;
      }
    }

    if (!isFound) {
      const dynamicScripts = ['/assets/js/main.js'];

      for (let i = 0; i < dynamicScripts.length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts [i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    }
  }

}
