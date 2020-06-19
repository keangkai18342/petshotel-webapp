const bcrypt = require('bcryptjs')

const makeHash = async(plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

const compareHash = async(plainText, hashText) => {
    const resultcompare = await bcrypt.compare(plainText,hashText);
    return resultcompare;
}

const myText = "1234";

makeHash(myText)
.then(hashText => {
    console.log(hashText);

    compareHash(myText,hashText)
    .then(status =>{
        console.log(status);
    })
    .catch(err =>{
        console.log(err);
    })
})
.catch(err =>{
    console.log(err);
})

