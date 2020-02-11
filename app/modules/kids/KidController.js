import BaseController from "../../utils/baseController";
import Email from "../../utils/email";
import { Kid, KidDetail } from "./KidModel";

export class KidController extends BaseController {
  constructor() {
    super();
  }

  createKid = async (req, res) => {
    try {
      const { parent_name, kid_name, age, gender } = req.body;

      console.log("OK");
      const kid = await Kid.query().insert({
        parent_name,
        kid_name,
        age,
        gender
      });

      if (kid) {
        return res.status(this.status.OK).json({
          message: "Successfull",
          kid,
          status: true
        });
      }

      return res.status(this.status.BAD_REQUEST).json({
        message: "Failed",
        status: false
      });
    } catch (err) {
      this.sendServerError(res, err);
    }
  };

  createKidDetail = async (req, res) => {
    try {
      const { interest, kid_id } = req.body;

      const kid_detail = await KidDetail.query().insert({
        interest,
        kid_id
      });

      if (kid_detail) {
        return res.status(this.status.OK).json({
          message: "Successfull",
          kid_detail,
          status: true
        });
      }

      return res.status(this.status.BAD_REQUEST).json({
        message: "Failed",
        status: false
      });
    } catch (err) {
      this.sendServerError(res, err);
    }
  };
}
