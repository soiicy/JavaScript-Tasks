'use strict';

function makeSquare(size) {
    const square = '■';
    const inside = ' ';
    let startLine = '';

    for (let line = 1; line <= size; line++) {
        if (line === 1 || line === size) {
            startLine += square.repeat(size) + '\n';
        } else {
            startLine += square + (inside.repeat(size - 2)) + square + '\n';
        }
    }
    return startLine;
}

console.log(makeSquare(3));