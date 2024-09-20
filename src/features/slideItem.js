export function slideItem(ref, length, direction) {
    const style = window.getComputedStyle(ref);
    const transformValue = style.transform;
    let translateX = 0;
  
    // transformValue가 'none'이 아닐 때만 파싱
    if (transformValue !== 'none') {
      const matrixValues = transformValue.match(/matrix.*\((.+)\)/);
      if (matrixValues) {
        const values = matrixValues[1].split(', ');
        translateX = parseFloat(values[4]); // X축 이동값
      }
    }
  
    if (direction === 'next') {
      // 다음 버튼 클릭 시
      if (translateX - 400 > -400 * (length)) {
        ref.style.transform = `translate(${translateX - 400}px)`;
      } else {
        ref.style.transform = 'translate(0px)';
      }
    } else if (direction === 'prev') {
      // 이전 버튼 클릭 시
      if (translateX !== 0) {
        ref.style.transform = `translate(${translateX + 400}px)`;
      } else {
        ref.style.transform = `translate(${-400 * (length - 1)}px)`;
      }
    }
  }