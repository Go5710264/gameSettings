import Settings from '../js/Settings';

test('getting an array with user settings', () => {
  const userChois = new Map([
    [{ theme: 'dark' }],
    [{ music: 'rock' }],
    [{ difficulty: 'hard' }],
  ]);
  expect(new Settings(userChois).settings()).toEqual(new Map([
    [{ theme: 'dark' }, ['ligth', 'gray']],
    [{ music: 'rock' }, ['pop', 'chillout', 'off', 'trance']],
    [{ difficulty: 'hard' }, ['normal', 'nightmare', 'easy']],
  ]));
});
