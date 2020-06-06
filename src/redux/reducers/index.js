import { combineReducers } from 'redux';
import router from './router';
import appDrawer from './appDrawer';
import plpaaReviewDrawer from './plpaaReviewDrawer';

import pcgReviewCard from './pcgReviewCard';
import supervisorReviewCard from './supervisorReviewCard';
import finalizedReviewCard from './finalizedReviewCard';
import plpaaReviewApprovalCard from './plpaaReviewApprovalCard';

export default combineReducers({
  router,
  appDrawer,
  plpaaReviewDrawer,
  pcgReviewCard,
  supervisorReviewCard,
  finalizedReviewCard,
  plpaaReviewApprovalCard
});
