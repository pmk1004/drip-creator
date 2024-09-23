import { createRandomNum } from "./createRandomNum";

export function getDrip(drips, setDrip, cooldownRef) {
  if (!cooldownRef.current) {
    const idx = createRandomNum(drips.length);
    console.log(drips[idx].drip);

    setDrip(drips[idx].drip);
    
    // 쿨타임 설정
    cooldownRef.current = true;
    setTimeout(() => {
      cooldownRef.current = false;
    }, 600); // 0.6초
  }
}