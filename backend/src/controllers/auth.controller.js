const authService = require("../services/auth.service");

const signup = async (req, res, next) => {
  try {
    const user = await authService.signup(req.body);

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
};