import { useAuth } from "./hooks/auth";

export function middleware(req) {
  const { user } = useAuth;
  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (req.cookies.get("user") && req.cookies.get("token")) {
      console.log(user);
    } else {
      return Response.redirect(new URL("/", req.url));
    }
  }
}
