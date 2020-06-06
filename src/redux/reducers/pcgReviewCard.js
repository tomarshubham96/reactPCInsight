import { PCG_REVIEW_CARD } from '../actionTypes';

export default function pcgReviewCard(state = false, action) {
  switch (action.type) {
    case PCG_REVIEW_CARD.TOGGLE:
      return !state;
    default:
      return state;
  }
}
