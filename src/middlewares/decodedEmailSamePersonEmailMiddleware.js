export const decodedEmailSamePersonEmailMiddleware = async (req, res, next) => {
  if (res.decoded.email !== res.user.email)
    return res.status(401).json({ message: "Não autorizado!" });

  next();
};
