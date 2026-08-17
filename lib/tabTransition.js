/** Shared tab slide direction based on bottom-menu order. */
let direction = 1;
let switched = false;

export const TAB_ORDER = ["index", "programs", "progress", "history"];

export function setTabSlideDirection(nextDirection) {
  direction = nextDirection >= 0 ? 1 : -1;
  switched = true;
}

export function getTabSlideDirection() {
  return direction;
}

export function hasTabSwitched() {
  return switched;
}
