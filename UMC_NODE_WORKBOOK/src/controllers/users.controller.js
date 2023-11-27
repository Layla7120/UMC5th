import { status } from "../../config/response.status.js";
import { getTempData, CheckFlag } from "../services/temp.service.js";
import { response } from "../../config/response.js";

export const user_mission = (req, res, next) => {
  res.send(response(status.SUCCESS, { mission: "hello" }));
};
