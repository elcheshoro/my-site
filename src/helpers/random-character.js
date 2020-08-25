export default () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.@_;#!~';
  const index = Math.floor(Math.random() * characters.length);
  return characters[index];
};
