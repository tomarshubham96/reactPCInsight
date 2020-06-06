import { PLPAA_REVIEW_APPROVAL_CARD } from '../actionTypes';

export default function plpaaReviewApprovalCard(state = false, action) {
  switch (action.type) {
    case PLPAA_REVIEW_APPROVAL_CARD.TOGGLE:
      return !state;
    default:
      return state;
  }
}
