export interface JwtPayload {
  email: string;
  role: string;
  sub: number;
  iat: number;
  exp: number;
}
