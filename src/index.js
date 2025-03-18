// import { initializeCounter } from './counter';
import image from './steve-after-a-workshop.jpg';
import favicon from './favicon-16x16.png';
import imageTooled from './steve-after-a-workshop.jpg?h=400&format=webp';

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
