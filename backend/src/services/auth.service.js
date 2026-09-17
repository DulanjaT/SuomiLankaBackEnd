const userRepository = require("../repositories/user.repository");
const { hashPassword } = require("../utils/password");

const signup = async ({ fullName, email, phone, password }) => {

  const existingUser = await userRepository.findByEmail(email);

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const passwordHash = await hashPassword(password);

  const user = await userRepository.create({
    fullName,
    email,
    phone,
    passwordHash,
  });

  return user;
};

module.exports = {
  signup,
};