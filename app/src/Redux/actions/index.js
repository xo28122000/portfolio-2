import { ADD1, HORIZONTAL_NAVIGATE } from "../constants";

// export function addArticle(payload) {
//   return { type: ADD1, payload };
// }

export function addOne() {
  return { type: ADD1 };
}

export function setHorzontalNavigate(payload = null) {
  return { type: HORIZONTAL_NAVIGATE, payload };
}
