import { jwtDecode, JwtPayload } from "jwt-decode";
import Cookies from "js-cookie";

interface ExtendedJwtPayload extends JwtPayload {
  role?: string;
  userName?: string;
  email?: string;
}

export const JWTDecode = () => {
  if (typeof window !== "undefined") {
    const token = Cookies.get("token");
    if (token) {
      const decoded = jwtDecode<ExtendedJwtPayload>(token);
      return { token, decoded };
    }
  }
  return { token: null, decoded: null };
};
