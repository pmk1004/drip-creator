import { createRandomNum } from "./createRandomNum";

export function getDrip(drips, setDrip) {
  const idx = createRandomNum(drips.length);
  console.log(drips[idx].drip);

  setDrip(drips[idx].drip);
}
