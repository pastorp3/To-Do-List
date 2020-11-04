import Library from '../src/library';
import save from '../src/save';

const library = new Library();
it('check if the library can be saved in localStorage', () => {
  expect(save(library)).toBe(true);
})