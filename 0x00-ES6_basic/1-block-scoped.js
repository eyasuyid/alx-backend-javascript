export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // this may need comment
    const task = true;
    // this may need a commet to
    const task2 = false;
  }

  return [task, task2];
}
