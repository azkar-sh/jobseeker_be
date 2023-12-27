const mysql = require("../configs/mysql");

module.exports = {
  getAllUser: (limit, offset, sortby, order, name) => {
    return new Promise((resolve, reject) => {
      mysql.query(
        `SELECT * FROM t_candidate WHERE full_name LIKE '%${name}%' ORDER BY ${sortby} ${order} LIMIT ${offset}, ${limit}`,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  getCountUser: () => {
    return new Promise((resolve, reject) => {
      mysql.query("SELECT * FROM t_candidate", (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  getUserById: (id) => {
    return new Promise((resolve, reject) => {
      mysql.query(
        "SELECT * FROM t_candidate WHERE candidate_id = ?",
        id,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  createUser: (data) => {
    return new Promise((resolve, reject) => {
      mysql.query("INSERT INTO t_candidate SET ?", data, (err, result) => {
        if (err) {
          reject(err);
        }

        mysql.query(
          "SELECT * FROM t_candidate WHERE candidate_id = ?",
          data.candidate_id,
          (err, result) => {
            if (err) {
              reject(err);
            }
            resolve(result);
          }
        );
      });
    });
  },
  checkEmail: (email) => {
    return new Promise((resolve, reject) => {
      mysql.query(
        "SELECT * FROM t_candidate WHERE email = ?",
        email,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  checkPhone: (phone) => {
    return new Promise((resolve, reject) => {
      mysql.query(
        "SELECT * FROM t_candidate WHERE phone_number = ?",
        phone,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  updateUser: (data, id) => {
    return new Promise((resolve, reject) => {
      mysql.query(
        "UPDATE t_candidate SET ? WHERE candidate_id = ?",
        [data, id],
        (err, result) => {
          if (err) {
            reject(err);
            console.log(err);
          }

          mysql.query(
            "SELECT * FROM t_candidate WHERE candidate_id = ?",
            id,
            (err, result) => {
              if (err) {
                reject(err);
              }
              resolve(result);
            }
          );
        }
      );
    });
  },
  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      mysql.query(
        "DELETE FROM t_candidate WHERE candidate_id = ?",
        id,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
};
