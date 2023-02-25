const _log = (msg) => process.stdout.write(msg);

_log('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name != null) {
    _log(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  _log('This important software is now closing\n');
});
