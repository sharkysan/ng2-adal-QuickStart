import {Injectable} from '@angular/core';

@Injectable()
export class SecretService {
  public get adalConfig(): any {
    return {
      tenant: 'dbacherbacher.onmicrosoft.com',
      clientId: '0d1a2988-cab4-4be4-a82e-5992bd0f80a1',
      redirectUri: window.location.origin + '/',
      postLogoutRedirectUri: window.location.origin + '/'
    };
  }
}
