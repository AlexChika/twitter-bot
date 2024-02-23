/* eslint-disable no-console */
const time = Number((Date.now() / 1000).toFixed());

function start() {
  const promise = new Promise<number>((resolve) => {
    const currTime = Number((Date.now() / 1000).toFixed());
    const timePassed = currTime - time;

    resolve(timePassed);
  });

  return promise;
}

export default start;
