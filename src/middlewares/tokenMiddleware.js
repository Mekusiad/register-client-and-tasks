import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const tokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) return res.status(403).json({ message: "Token inválido!" });

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Token expirado!" });

    res.decoded = decoded;

    next();
  });
};
