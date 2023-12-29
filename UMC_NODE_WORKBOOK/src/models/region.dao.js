import { pool } from "../../config/db.connect.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import {
  insertReviewSql,
  confirmShop,
  getShopID,
  getReviewID,
  insertShopSql,
} from "./region.sql.js";

export const addshoptoRegion = async data => {
  try {
    const conn = await pool.getConnection();

    const result = await pool.query(insertShopSql, [
      data.shopname,
      data.address,
      data.number,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const addreviewtoShop = async data => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmShop, data.shopname);

    if (confirm[0].isExistShop) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertReviewSql, [
      data.userid,
      data.shopname,
      data.review,
      data.date,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const addmissiontoShop = async data => {
  try {
    const conn = await pool.getConnection();

    const result = await pool.query(insertMissionSql, [
      data.shopname,
      data.missionname,
      data.missionDetail,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const getShop = async shopId => {
  try {
    const conn = await pool.getConnection();
    const [shop] = await pool.query(getShopID, shopId);

    console.log(shop);

    if (shop.length == 0) {
      return -1;
    }

    conn.release();
    return shop;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const getReview = async reviewId => {
  try {
    const conn = await pool.getConnection();
    const [review] = await pool.query(getReviewID, reviewId);

    console.log(review);

    if (review.length == 0) {
      return -1;
    }

    conn.release();
    return review;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const getMission = async missionid => {
  try {
    const conn = await pool.getConnection();
    const [mission] = await pool.query(getMissionID, missionid);

    console.log(mission);

    if (mission.length == 0) {
      return -1;
    }

    conn.release();
    return mission;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
