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

  // 이동 값을 화면 크기에 따라 다르게 설정
  let move = 500; // 기본 이동 값
  if (window.innerWidth <= 375) {
      move = 250; // 화면 폭이 375px 이하일 때 이동 값
  } else if (window.innerWidth <= 574) {
      move = 380; // 화면 폭이 574px 이하일 때 이동 값
  }

  if (direction === 'next') {
      // 다음 버튼 클릭 시
      if (translateX - move > -move * length) {
          ref.style.transform = `translate(${translateX - move}px)`;
      } else {
          ref.style.transform = 'translate(0px)';
      }
  } else if (direction === 'prev') {
      // 이전 버튼 클릭 시
      if (translateX !== 0) {
          ref.style.transform = `translate(${translateX + move}px)`;
      } else {
          ref.style.transform = `translate(${-move * (length - 1)}px)`;
      }
  }
}
