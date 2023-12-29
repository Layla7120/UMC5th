import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import {
  addShopResponseDTO,
  addReviewResponseDTO,
} from "../dtos/region.dto.js";
import {
  addshoptoRegion,
  addreviewtoShop,
  addmissiontoShop,
  getShop,
  getReview,
  getMission,
} from "../models/region.dao.js";

export const addshop = async body => {
  const joinShopData = await addshoptoRegion({
    shopname: body.shopname,
    address: body.address,
    number: body.number,
  });

  if (joinShopData == -1) {
    throw new BaseError(status.EMAIL_ALREADY_EXIST);
  } else {
    return addShopResponseDTO(await getShop(joinShopData));
  }
};

export const addreview = async body => {
  const addReviewData = await addreviewtoShop({
    shopname: body.shopname,
    address: body.address,
    number: body.number,
  });

  if (addReviewData == -1) {
    throw new BaseError(status.EMAIL_ALREADY_EXIST);
  } else {
    return addReviewResponseDTO(await getReview(addReviewData));
  }
};

export const addmission = async body => {
  const addMissionData = await addmissiontoShop({
    shopname: body.shopname,
    missionname: body.missionname,
    missionDetail: body.missionDetail,
  });

  if (addMissionData == -1) {
    throw new BaseError(status.EMAIL_ALREADY_EXIST);
  } else {
    return addMissionResponseDTO(await getMission(addMissionData));
  }
};
