// 1 задача


// 2 задача

const task2 = () => {
    let result = 0;
    for (let i = 1; i < 10; i += 1) {
        result += i;
    }
    return result;
}

// 3 задача

const task3 = (string) => {
    const arr = string.split(",");
    const newArr = [...new Set(arr)];
    return newArr.join("");
}