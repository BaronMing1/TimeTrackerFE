import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

class Utils {
  login_profile: any;
  public validateLogin(_auth: AuthService): any {
    if (!_auth.isAuthenticated$) {
      return Promise.resolve(false);
    } else {
      if (_auth.userProfile$) {
        return Promise.resolve(_auth.userProfile$);
      } else {
        _auth.getUser$((err, login_profile) => {
          if (err) {
            return Promise.resolve(false);
          }
          return Promise.resolve(login_profile);
        });
      }
    }
  }
}
export const utils = new Utils();
