export const countDown = (num: number, progress: (p: number) => void) => {
  return new Promise(resolve => {
    const tmr = setInterval(() => {
      num--;
      if (num > 0) {
        progress(num);
      } else {
        clearInterval(tmr);
        resolve(num);
      }
    }, 1000);
  });
};
