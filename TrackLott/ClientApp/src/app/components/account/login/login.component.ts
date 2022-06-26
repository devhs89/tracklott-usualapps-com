import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProgressIndicatorService} from "../../../services/progress-indicator.service";
import {AccountService} from "../../../services/account.service";
import {UserLogin} from "../../../models/user-login";
import {Router} from "@angular/router";
import {SnackBarService} from "../../../services/snack-bar.service";
import {appRouteConst} from "../../../constants/app-route-const";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private accountService: AccountService, private router: Router, private snackBarService: SnackBarService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "email": new FormControl(null, Validators.required),
      "password": new FormControl(null, Validators.required),
      "rememberMe": new FormControl(false, Validators.pattern("true|false"))
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      let userCredentials: UserLogin = {...this.loginForm.value};
      this.accountService.onLogin(userCredentials).subscribe({
        next: () => {
          const ignore = this.router.navigate([appRouteConst.homeAbs]);
        },
        error: err => this.snackBarService.showSnackBar(err.error)
      });
    }
  }
}
