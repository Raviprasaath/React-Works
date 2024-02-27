
function array() {
    return (a, b) => a+b;
}

const f1 = array(1, 2);
const f2 = array(1, 2);

console.log(f1 === f2);
// this is will give false

// Reason in the time of re render references are got varied
// Reference Equality Concept