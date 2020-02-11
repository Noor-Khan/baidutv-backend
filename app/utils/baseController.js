import httpCodes from "http-codes";

export default class {
  status;
  ok;
  badRequest;
  serverErr;
  constructor() {
    this.status = httpCodes;
    this.ok = httpCodes.OK;
    this.badRequest = httpCodes.BAD_REQUEST;
    this.serverErr = httpCodes.INTERNAL_SERVER_ERROR;
  }

  sendServerError = (res, errr) => {
    // error(errr); //log errors
    const err = {
      status: 0,
      message: "Something went wrong no our side.",
      errors: ["Please check logs"],
      code: this.serverErr
    };

    return res.status(this.serverErr).json({
      error: err,
      message: errr.message
    });

    // throw error for error handlers to catch and report in sentry.
    // throw error;
  };

  sendBadRequest = (res, errors = [], message = "") => {
    if (errors.length) {
      error(errors);
    }

    const err = {
      status: 0,
      message: message.length > 0 ? message : "Bad request",
      errors,
      code: this.badRequest
    };

    return res.status(this.badRequest).json(err);
  };
  sendOk = (res, data) => {
    return res.status(this.ok).json(data);
  };
}
