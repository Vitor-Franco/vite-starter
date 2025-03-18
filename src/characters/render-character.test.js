import { test, expect } from 'vitest';

import renderCharacter from './render-character';

const characters = import.meta.glob('./*.json', { eager: true });

test.each(Object.values(characters).map((file) => file.default))(
  'Should be able to render character $name data correctly',
  (character) => {
    expect(renderCharacter(character)).toMatchSnapshot();
  },
);
