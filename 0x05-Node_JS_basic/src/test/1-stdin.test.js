import {_log, getName} from '../../1-stdin'

describe('1-stdin', () => {
  test('test process log', () => {
    expect(_log('this is process message'));
  })

  test('get name', () => {
    expect(getName());
    process.stdin.write('joshua');
  })
});