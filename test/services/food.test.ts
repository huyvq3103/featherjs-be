import assert from 'assert';
import app from '../../src/app';

describe('\'food\' service', () => {
  it('registered the service', () => {
    const service = app.service('food');

    assert.ok(service, 'Registered the service');
  });
});
