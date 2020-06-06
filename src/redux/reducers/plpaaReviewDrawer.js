import { PLPAA_REVIEW_DRAWER } from '../actionTypes';

export default function plpaaReviewDrawer(state = true, action) {
  switch (action.type) {
    case PLPAA_REVIEW_DRAWER.TOGGLE:
      return !state;
    default:
      return state;
  }
}
