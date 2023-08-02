import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDateFromToken = (request: NextRequest) => {
  try {
    const incodedToken = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(
      incodedToken,
      process.env.TOKEN_SECRET!
    );
    return decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
