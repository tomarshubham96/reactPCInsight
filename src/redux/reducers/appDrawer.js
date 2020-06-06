import { APP_DRAWER } from '../actionTypes';

export default function appDrawer(state = false, action) {
  switch (action.type) {
    case APP_DRAWER.TOGGLE:
      return !state;
    default:
      return state;
  }
}
