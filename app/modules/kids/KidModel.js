import baseModel from "../../utils/baseModel";

export class Kid extends baseModel {
  static tableName = "kids";
  static get relationMappings() {
    return {
      kid_details: {
        relation: baseModel.HasManyRelation,
        modelClass: KidDetails,
        join: {
          from: "kids.id",
          to: "kid_details.kid_id"
        }
      }
    };
  }
}

export class KidDetails extends baseModel {
  static tableName = "kid_details";
}
