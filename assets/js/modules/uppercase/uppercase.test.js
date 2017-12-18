import tape from 'tape';
import uppercase from './uppercase';

tape('Convert to uppercase', (t) => {
  const value = uppercase('str');

  t.equal(value, 'STR');
  
  t.end();
});