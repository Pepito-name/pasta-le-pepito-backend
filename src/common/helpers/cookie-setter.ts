import { Response } from 'express';

const setRefreshTokenCookie = (response: Response, refreshToken: string) => {
  response.cookie('refresh_token', refreshToken, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    sameSite: 'strict',
    secure: true,
  });
};

export { setRefreshTokenCookie };
