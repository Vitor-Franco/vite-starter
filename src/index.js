// import { initializeCounter } from './counter';

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
