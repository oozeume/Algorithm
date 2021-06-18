const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`
).split('\n');


for (let i = 0; i < input.length; i++) {
    if (input[i] === '.') {
        break;
    }
    let result = findBalance(input[i]);
    result === true ? console.log('Yes') : console.log('No');
}

function findBalance(string) {
    let stack = [];
    let pair = null;

    for (let char of string) {
        if (char === '(' || char === '[') stack.push(char);
        else if (char === ')') {
            pair = stack.pop();
            if ((pair === null) || (pair !== '(')) return false;
        } else if (char === ']') {
            pair = stack.pop();
            if (pair === null || pair !== '[') return false;
        }
    }

    return stack.length === 0 ? true : false;
}

