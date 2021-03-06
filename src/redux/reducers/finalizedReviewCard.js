import { FINALIZED_REVIEW_CARD } from '../actionTypes';

export default function finalizedReviewCard(state = false, action) {
  switch (action.type) {
    case FINALIZED_REVIEW_CARD.TOGGLE:
      return !state;
    default:
      return state;
  }
}
