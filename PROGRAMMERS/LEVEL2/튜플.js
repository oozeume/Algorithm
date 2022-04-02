{
  const solution = (s) => {
    let test = s.replace('{{', '').replace('}}', '').split('},{')

    let numlist = [];

    for (let i = 0; i < test.length; i++) {
      let numItem = test[i].split(',').map((str) => str.split(',')).map((str) => Number(str))
      numlist.push(numItem);
    }

    numlist.sort((a, b) => {
      if (a.length > b.length) {
        return 1;
      } else {
        return -1;
      }
    });

    const answer = numlist.reduce((acc, cur) => {
      const value = cur.filter(v => !acc.includes(v))[0];
      acc.push(value);
      return acc;
    }, []);

    return answer;
  }

  const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
  console.log(solution(s));
}