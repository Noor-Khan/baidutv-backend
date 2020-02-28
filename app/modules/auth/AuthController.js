import BaseController from "../../utils/baseController";
import Email from "../../utils/email";
import nodemailer from 'nodemailer'
import Moment from "moment"


import {
  User
} from "./AuthModel";

export class AuthController extends BaseController {
  constructor() {
    super();
  }

  register = async (req, res) => {
    try {
      const {
        email
      } = req.body;
      const findEmail = await User.query().where({
        email
      });

      if (Array.isArray(findEmail) && findEmail.length > 0) {
        throw new Error(
          "Email has already being taken. Please try again with an alternate email."
        );
      }

      const user = await User.query().insert({
        email,
      });


      if (user) {
        return res.status(this.status.OK).json({
          message: "Succesfull",
          user,
          status: true
        });
      }
    } catch (err) {
      this.sendServerError(res, err);
    }
  };

  googleAuth = async (req, res) => {
    try {
      const token = req.body.GoogleUser.uc.access_token;
      const email = req.body.GoogleUser.Qt.zu;

      const [findEmail] = await User.query().where({
        email
      })

      if (findEmail) {
        return res.status(this.status.OK).json({
          message: "successfull",
          result: {
            user: findEmail,
            token
          }
        })
      }

      const user = await User.query().insert({
        email
      })

      if (user) {
        return res.status(this.status.CREATED).json({
          message: "Successfull",
          result: {
            user,
            token
          }
        })
      }

      return res.status(this.status.BAD_REQUEST).json({
        message: "Failed",
        status: false
      })
    } catch (err) {
      return res.status(this.status.INTERNAL_SERVER_ERROR).json({
        error: err,
        status: false
      })
    }
  }

  facebookAuth = async (req, res) => {
    try {
      const {
        response,
      } = req.body;
      console.log(response)

      const [findUser] = await User.query().where({
        user_id: response.id
      })

      if (findUser) {
        return res.status(this.status.OK).json({
          message: "Successfull",
          user: findUser
        })
      }

      const user = await User.query().insert({
        user_id: response.id,
        name: response.name,
        email: response.email || null
      })

      if (user) {
        return res.status(this.status.CREATED).json({
          message: "Successfull",
          user
        })
      }

      return res.status(this.status.BAD_REQUEST).json({
        message: "Failed",
        status: false
      })
    } catch (err) {
      return res.status(this.status.INTERNAL_SERVER_ERROR).json({
        error: err,
        status: false
      })
    }
  }
}