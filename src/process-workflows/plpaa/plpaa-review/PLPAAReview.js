import React from 'react';

import PLPAAReviewDrawer from './PLPAAReviewDrawer';
import PLPAAReviewHeader from './PLPAAReviewHeader';
import PLPAAReviewBody from './PLPAAReviewBody';

function PLPAAReview() {
  return (
    <React.Fragment>
      <PLPAAReviewHeader />
      <PLPAAReviewDrawer />
      <PLPAAReviewBody />
    </React.Fragment>
  );
}

export default PLPAAReview;
