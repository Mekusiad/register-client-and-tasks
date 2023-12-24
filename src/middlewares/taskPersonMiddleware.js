export const taskPersonMiddleware = async (req, res, next) => {
  if (res.user.email !== res.task.taskedByUser)
    return res.status(401).json({ message: "Não autorizado!" });

  next();
};
