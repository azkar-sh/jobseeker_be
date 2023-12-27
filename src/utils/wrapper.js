module.exports = {
  response: (respons, status, msg, data, pagination) => {
    const result = {
      status,
      msg,
      data,
      pagination,
    };
    return respons.status(status).json(result);
  },
};
