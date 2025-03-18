// import { initializeCounter } from './counter';
import image from './steve-after-a-workshop.jpg';
console.log('🚀 ~ file: index.js:3 ~ image:', image);
import favicon from './favicon-16x16.png';
console.log('🚀 ~ file: index.js:4 ~ favicon:', favicon);
// console.log("🚀 ~ file: index.js:3 ~ image:", image)

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
