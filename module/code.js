module.exports.caesarCipher = function caesarCipher(str) {
    const [arr1,arr2] = str.toString().split(":");
    a = JSON.parse(arr1);
    b = JSON.parse(arr2);
    let c = a.filter(value => !b.includes(value));
    return c.toString();
 }
 