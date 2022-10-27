import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, "8c23d7b8d3c00ddb40961c856822aef8");
    console.log(decoded);
  } catch {
    throw new Error("Invalid Token");
  }
}
