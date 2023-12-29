export const addShopResponseDTO = shop => {
  return {
    shopname: shop[0].shopname,
    address: shop[0].address,
    number: shop[0].number,
  };
};

export const addReviewResponseDTO = user => {
  return {
    userid: user[0].userid,
    review: user[0].review,
    date: user[0].date,
  };
};
