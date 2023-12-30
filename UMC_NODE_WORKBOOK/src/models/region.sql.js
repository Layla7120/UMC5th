export const insertShopSql =
  "INSERT INTO shops (shopname, address, number) VALUES (?, ?, ?);";

export const getShopID = "SELECT * FROM shops WHERE shop_id = ?";

export const insertReviewSql =
  "INSERT INTO reivews (userid, shopname, review, date) VALUES (?, ?, ?, ?);";

export const insertMissionSql =
  "INSERT INTO missions (shopname, missionname, missionDetail) VALUES (?, ?, ?);";

export const confirmShop =
  "SELECT EXISTS(SELECT 1 FROM confirmShop WHERE shopname = ?) as isExistShop";

export const getReviewID = "SELECT * FROM reviews WHERE review_id = ?";

export const getMissionID = "SELECT * FROM missions WHERE mission_id = ?";

export const getReviewByReviewId =
  "SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM review r JOIN user u on r.user_id = u.user_id " +
  "WHERE r.restaurant_id = ? AND r.review_id < ? " +
  "ORDER BY r.review_id DESC LIMIT ? ;";

export const getReviewByReviewIdAtFirst =
  "SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM review r JOIN user u on r.user_id = u.user_id " +
  "WHERE r.restaurant_id = ? " +
  "ORDER BY r.review_id DESC LIMIT ? ;";
