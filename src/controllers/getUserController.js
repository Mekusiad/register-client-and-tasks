export const getUserController = async (req, res, next) => {
  const person = res.user;

  return res.status(200).json({ person });
};
