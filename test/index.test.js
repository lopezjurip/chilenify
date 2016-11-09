import { expect } from 'chai';
import chilenify from '../src';

describe('add', () => {
  it('perv works', () => {
    const result = chilenify('Hola que tal compadre', { perv: true });
    console.log(result);
    return result
  });

  it('perv works disabled', () => {
    const result = chilenify('Hola que tal compadre', { perv: false });
    console.log(result);
    return result
  });
});
