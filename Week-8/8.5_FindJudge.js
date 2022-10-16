function findTheTownJudge(N, trust) {
    let count = 0;
    let people;
    let peopleInTown = [];
    for (let [i, j] of trust) {
        peopleInTown.push(i);
        peopleInTown.push(j);
        people = new Set(peopleInTown);
        if (i == N) {// first condition
            return -1;
        }
        if (j == N) {
            count++;
        }
    }
    if (people.size-1 == count) {//second condition
        return N;
    } else {
        return -1;
    }
}


let trust = [
    [1, 3],// first trusts on second
    [2, 3],
    [3, 1]
]
// 1) The town judge trusts nobody.
// 2) Everybody trusts the town judge.
console.log(findTheTownJudge(3, trust));
