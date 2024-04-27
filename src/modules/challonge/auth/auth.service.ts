import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BehaviorSubject } from 'rxjs';

export const CHALLONGE_API_URL = 'https://api.challonge.com/v2';

export interface ChallongeResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  created_at: number;
}

@Injectable()
export class AuthService {

  private readonly _authenticationState$ = new BehaviorSubject<ChallongeResponse | undefined>(undefined);

  get accessToken(): string {
    return this._authenticationState$.value?.access_token || '';
  }

  get isAuthenticated(): boolean {
    return this._authenticationState$.value !== undefined;
  }

  constructor(
    private readonly configSerice: ConfigService,
  ) {
    this.authenticateApp();
  }

  /**
   * Sends a post request to the Challonge API to authenticate the app via encoded forms
   * obtains CHALLONGE_API_CLIENT_ID and CHALLONGE_API_SECRET from the .env file
   * and makes a request to https://api.challonge.com/oauth/token to get the access token
   * using grant_type as client_credentials
   */
  async authenticateApp(): Promise<ChallongeResponse | undefined> {
    const clientId = this.configSerice.get('CHALLONGE_API_CLIENT_ID');
    const clientSecret = this.configSerice.get('CHALLONGE_API_CLIENT_SECRET');
    const url = 'https://api.challonge.com/oauth/token';
    const body = new URLSearchParams();
    body.append('grant_type', 'client_credentials');
    body.append('client_id', clientId);
    body.append('client_secret', clientSecret);
    body.append('scope', 'application:organizer');

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
      });
      const bodyResponse = await res.json();
      this._authenticationState$.next(bodyResponse);
      return bodyResponse;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }
}