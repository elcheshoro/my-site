import randomCharacter from '../../../helpers/random-character';

export default () => {
  const characters = [];

  for (let i = 0; i < 1000; i += 1) {
    characters.push(randomCharacter());
  }

  return characters.join('');
};
