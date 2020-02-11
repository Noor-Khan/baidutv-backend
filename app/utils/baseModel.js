import objection from "objection";
import database from "../config/database";

const { Model } = objection;

Model.knex(database);

export default Model;
