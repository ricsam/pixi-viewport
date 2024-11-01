import Penner from "tween-functions";

/**
 * Returns correct Penner equation using string or Function.
 *
 * @internal
 * @ignore
 * @param {(function|string)} [ease]
 * @param {defaults} default penner equation to use if none is provided
 */
export default function ease(
  ease: Penner.TweenFunctionBack | keyof typeof Penner,
  defaults?: keyof typeof Penner,
) {
  if (!ease && defaults) {
    return Penner[defaults];
  } else if (typeof ease === "function") {
    return ease;
  } else if (typeof ease === "string") {
    return Penner[ease];
  }
}
