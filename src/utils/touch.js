const touchData = {
  touching: false,
  trace: [],
};

const onTouchStart = e => {
  if (e.touches.length !== 1) {
    touchData.current = {
      touching: false,
      trace: [],
    };
    return;
  }
  touchData.touching = true;
  touchData.trace = [{ x: e.touches[0].screenX, y: e.touches[0].screenY }];
};

const onTouchMove = e => {
  if (!touchData.current.touching) {
    return;
  }
  touchData.current.trace = [
    ...touchData.current.trace,
    {
      x: e.touches[0].screenX,
      y: e.touches[0].screenY,
    },
  ];
};

const onTouchEnd = e => {
  if (!touchData.current.touching) {
    return undefined;
  }
  const traceTem = touchData.current.trace;
  touchData.current.touching = false;
  touchData.current.trace = [];
  // 开始处理
  let startPosition = traceTem[0];
  let endPosition = traceTem[traceTem.length - 1];
  if (endPosition.x - startPosition.x > 150) {
    return 'R';
  }
  if (startPosition.x - endPosition.x > 150) {
    return 'L';
  }
};

export { onTouchStart, onTouchMove, onTouchEnd };
