import { expect } from 'chai';
import chilenify from '../src';

describe('add', () => {
  it('should add 2 and 2', () => {
    return chilenify('Hola que tal');
  });
});
