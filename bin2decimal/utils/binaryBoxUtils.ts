export const convertBinary2Decimal = (binary: number | null) => {
    let result = 0;
    if (binary) {
        let binaryCopy = binary;
        let digitalNumber;
        let counter = 0;
        while(binaryCopy > 0){
            digitalNumber = binaryCopy%10;
            result += digitalNumber * 2 ** counter;

            binaryCopy = Math.floor(binaryCopy/10)
            counter++;
            console.log('Verificando result');
            console.log(result);
            console.log(binaryCopy);
        }
    }
    return result;
}

export const isValid = (maybeValidNumber: string) =>  {
    if (!Number(maybeValidNumber)) return false;
    for (let char of maybeValidNumber) {
        if (char !== '0'  && char !== '1') return false;
    }
    return true;
}