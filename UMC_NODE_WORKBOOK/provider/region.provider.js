export const getReview = async (userId, query) => {
  const { reviewId, size = 3 } = query;
  return previewReviewResponseDTO(await getPreviewReview());
};
