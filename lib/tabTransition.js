/** Shared tab slide direction based on bottom-menu order. */
let direction = 1;

export const TAB_ORDER = ["index", "programs", "progress", "history"];

export function setTabSlideDirection(nextDirection) {
  direction = nextDirection >= 0 ? 1 : -1;
}

export function getTabSlideDirection() {
  return direction;
}
