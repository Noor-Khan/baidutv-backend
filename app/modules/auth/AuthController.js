import BaseController from "../../utils/baseController";
import Email from "../../utils/email";
import { User } from "./AuthModel";

export class AuthController extends BaseController {
  constructor() {
    super();
  }

  register = async (req, res) => {
    try {
      const { email } = req.body;
      const findEmail = await User.query().where({
        email
      });
      if (Array.isArray(findEmail) && findEmail.length > 0) {
        return {
          message:
            "Email has already being taken. Please try again with an alternate email."
        };
      }

      console.log("ok");
      const user = await User.query().insert({
        email
      });
      console.log(user);
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
}
