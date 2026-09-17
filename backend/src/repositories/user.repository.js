const prisma = require("../config/database");

const findByEmail = async (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

const create = async (data) => {
  return prisma.user.create({
    data,
  });
};

module.exports = {
  findByEmail,
  create,
};