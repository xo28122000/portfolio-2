import { ADD1, HORIZONTAL_NAVIGATE, SETPAGENO } from "../constants";

// export function addArticle(payload) {
//   return { type: ADD1, payload };
// }

export function addOne() {
  return { type: ADD1 };
}

export function setHorzontalNavigate(payload = null) {
  return { type: HORIZONTAL_NAVIGATE, payload };
}

export function setPageNo(payload = 0) {
  return { type: SETPAGENO, payload };
}
