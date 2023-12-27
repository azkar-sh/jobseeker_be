const wrapper = require("../utils/wrapper");
const userModel = require("../models/user-models");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      let { page, limit, sortby, order, name } = req.query;

      page = parseInt(page) || 1;
      limit = parseInt(limit) || 5;
      sortby = sortby || "created_at";
      order = order || "ASC";
      name = name || "";

      const offset = page * limit - limit;

      const result = await userModel.getAllUser(
        limit,
        offset,
        sortby,
        order,
        name
      );

      const getCountUser = await userModel.getCountUser();

      let totalData = 0;

      if (name === "") {
        totalData = getCountUser.length;
      } else {
        totalData = result.length;
      }

      const totalPage = Math.ceil(totalData / limit);

      const pagination = {
        page,
        totalPage,
        limit,
        totalData,
      };

      return wrapper.response(
        res,
        200,
        "Success Get All User",
        result,
        pagination
      );
    } catch (error) {
      return wrapper.response(res, 400, "Bad Request", error);
    }
  },
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;

      const result = await userModel.getUserById(id);

      if (result.length < 1) {
        return wrapper.response(res, 400, "Id Not Found");
      }

      return wrapper.response(res, 200, "Success Get User By Id", result);
    } catch (error) {
      return wrapper.response(res, 400, "Bad Request", error);
    }
  },
  createUser: async (req, res) => {
    try {
      const {
        email,
        phone_number,
        full_name,
        dob,
        pob,
        gender,
        year_exp,
        last_salary,
      } = req.body;

      const id = Math.floor(Math.random() * 1000000000);
      const timeStamp = Date.now() / 1000;

      //   Email Validation

      const checkEmail = await userModel.checkEmail(email);

      if (checkEmail.length > 0) {
        return wrapper.response(res, 400, "Email Already Exist");
      }

      //   Phone Validation

      const checkPhone = await userModel.checkPhone(phone_number);

      if (checkPhone.length > 0) {
        return wrapper.response(res, 400, "Phone Number Already Exist");
      }

      const setData = {
        candidate_id: id,
        email,
        phone_number,
        full_name,
        dob,
        pob,
        gender,
        year_exp,
        last_salary,
        created_at: timeStamp,
        updated_at: timeStamp,
      };

      const result = await userModel.createUser(setData);

      return wrapper.response(res, 200, "Success Create User", result);
    } catch (error) {
      return wrapper.response(res, 400, "Bad Request", error);
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;

      const {
        email,
        phone_number,
        full_name,
        dob,
        pob,
        gender,
        year_exp,
        last_salary,
      } = req.body;

      //   Id Validation

      const checkId = await userModel.getUserById(id);

      if (checkId.length < 1) {
        return wrapper.response(res, 400, "Id Not Found");
      }

      //   Email Validation

      const checkEmail = await userModel.checkEmail(email);

      if (checkEmail.length > 0) {
        return wrapper.response(res, 400, "Email Already Exist");
      }

      //   Phone Validation

      const checkPhone = await userModel.checkPhone(phone_number);

      if (checkPhone.length > 0) {
        return wrapper.response(res, 400, "Phone Number Already Exist");
      }

      const timeStamp = Date.now() / 1000;

      const setData = {
        email: email || checkId[0].email,
        phone_number: phone_number || checkId[0].phone_number,
        full_name: full_name || checkId[0].full_name,
        dob: dob || checkId[0].dob,
        pob: pob || checkId[0].pob,
        gender: gender || checkId[0].gender,
        year_exp: year_exp || checkId[0].year_exp,
        last_salary: last_salary || checkId[0].last_salary,
        updated_at: timeStamp,
      };

      const result = await userModel.updateUser(setData, id);

      return wrapper.response(res, 200, "Success Update User", result);
    } catch (error) {
      console.log(error);
      return wrapper.response(res, 400, "Bad Request", error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;

      const checkId = await userModel.getUserById(id);

      if (checkId.length < 1) {
        return wrapper.response(res, 400, "Id Not Found");
      }

      const result = await userModel.deleteUser(id);

      return wrapper.response(res, 200, "Success Delete User", {});
    } catch (error) {
      return wrapper.response(res, 400, "Bad Request", error);
    }
  },
};
