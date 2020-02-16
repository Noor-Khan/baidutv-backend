import BaseController from "../../utils/baseController";
import Email from "../../utils/email";
import { Kid, KidDetails } from "./KidModel";

export class KidController extends BaseController {
  constructor() {
    super();
  }

  createKid = async (req, res) => {
    try {
      const { parent_name, kid_arr } = req.body;

      const k = await Kid.query().insert({
        parent_name: parent_name
      });

      let kid_detail = [];
      for (let i of kid_arr) {
        const detail = await KidDetails.query().insert({
          kid_name: i.kid_name,
          age: i.age,
          gender: i.gender,
          interest: i.interest,
          kid_id: k.id
        });
        kid_detail.push(detail);
      }

      const kid = await Kid.query()
        .where({ id: k.id })
        .withGraphFetched("kid_details");

      if (kid) {
        return res.status(this.status.OK).json({
          message: "Successfull",
          result: kid,
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
