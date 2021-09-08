const solution = (phone_number) => {
  let length = phone_number.length;
  let hideNum = phone_number.substring(0, length - 4).replace(/[0-9]/g, "*");
  let showNum = phone_number.substring(length - 4);
  return hideNum + showNum;
}

let phone_number = "027778888";
console.log(solution(phone_number));