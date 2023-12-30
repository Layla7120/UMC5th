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

export const previewReviewResponseDTO = data => {
  const reviews = [];

  for (let i = 0; i < data.length; i++) {
    reviews.push({
      userid: data[i].userid,
      review: data[i].review,
      create_date: formatDate(data[i].date),
    });
  }
  return { reviewData: reviews, cursorId: data[data.length - 1].review_id };
};

const formatDate = date => {
  return new Intl.DateTimeFormat("kr")
    .format(new Date(date))
    .replaceAll(" ", "")
    .slice(0, -1);
};
