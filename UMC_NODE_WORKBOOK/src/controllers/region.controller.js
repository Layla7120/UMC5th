import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { addshop, addreview, addmission } from "../services/region.service.js";

export const addingShop = async (req, res, next) => {
  console.log("가게를 추가합니다.");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await addshop(req.body)));
};

export const addingReview = async (req, res, next) => {
  console.log("리뷰를 추가합니다.");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await addreview(req.body)));
};

export const addingMissions = async (req, res, next) => {
  console.log("미션을 추가합니다.");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await addmission(req.body)));
};
