import { SUPERVISOR_REVIEW_CARD } from '../actionTypes';

export default function supervisorReviewCard(state = false, action) {
  switch (action.type) {
    case SUPERVISOR_REVIEW_CARD.TOGGLE:
      return !state;
    default:
      return state;
  }
}
