import {
    APP_DRAWER,
    PLPAA_REVIEW_DRAWER,
    PCG_REVIEW_CARD,
    SUPERVISOR_REVIEW_CARD,
    FINALIZED_REVIEW_CARD,
    PLPAA_REVIEW_APPROVAL_CARD
  } from './actionTypes';
  
  export function appDrawerToggle() {
    return {
      type: APP_DRAWER.TOGGLE
    };
  }
  
  export function plpaaReviewDrawerToggle() {
    return {
      type: PLPAA_REVIEW_DRAWER.TOGGLE
    };
  }
  
  export function pcgReviewCardToggle() {
    return {
      type: PCG_REVIEW_CARD.TOGGLE
    };
  }
  
  export function supervisorReviewCardToggle() {
    return {
      type: SUPERVISOR_REVIEW_CARD.TOGGLE
    };
  }
  
  export function finalizedReviewCardToggle() {
    return {
      type: FINALIZED_REVIEW_CARD.TOGGLE
    };
  }
  
  export function plpaaReviewApprovalCardToggle() {
    return {
      type: PLPAA_REVIEW_APPROVAL_CARD.TOGGLE
    };
  }
  