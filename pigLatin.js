// add first letter to last and add 'ay' to the end

const args = process.argv;

const ans = args.reduce((acc,curr) => {
  const wordarr = curr.split('');
  wordarr.push(wordarr[0]);
  wordarr.shift();
  return acc + ' ' + wordarr.join('') + 'ay';
}).split(' ').slice(2).join(' ');

console.log(ans);