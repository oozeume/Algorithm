const solution = (new_id) => {
  let answer = new_id;
  answer = answer.toLowerCase();
  answer = answer.replace(/[^a-z0-9-_.]/g, '');
  answer = answer.replace(/\.+/g, '.');
  answer = answer.replace(/^\.|\.$/g, '');

  if (answer.length === 0) {
    answer = 'a';
  }
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    answer = answer.replace(/\.$/, '');
  }
  while (answer.length <= 2) {
    answer += answer.charAt(answer.length - 1);
  }
  return answer;
}

const new_id = "...!@BaT#*..y.abcdefghijklm";
console.log(solution(new_id));