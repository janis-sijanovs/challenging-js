// Task 1

console.log("")
console.log("Task 1")
console.log("")

const addNumbers = (a: number, b: number): number => a + b;

console.log(addNumbers(1, 2))
console.log(addNumbers(1, 10))
console.log(addNumbers(99, 1))

// Task 2

console.log("")
console.log("Task 2")
console.log("")

const getDataType = (data: any): string => typeof data;

console.log(getDataType(1))
console.log(getDataType(false))
console.log(getDataType({}))
console.log(getDataType(null))
console.log(getDataType('string'))
console.log(getDataType(['array']))

// Task 3

console.log("")
console.log("Task 3")
console.log("")

const isSameTypeAndValue = (a: any, b: any): boolean => a === b;

console.log(isSameTypeAndValue(2, 3))
console.log(isSameTypeAndValue(3, 3))
console.log(isSameTypeAndValue(1, '1'))
console.log(isSameTypeAndValue('10', '10'))

// Task 4

console.log("")
console.log("Task 4")
console.log("")

const getNthChar = (text: string, n: number): string => text[n-1];

console.log(getNthChar('abcd', 1))
console.log(getNthChar('zyxbwpl', 5))
console.log(getNthChar('gfedcba', 3))

// Task 5

console.log("")
console.log("Task 5")
console.log("")

const removeFirstThreeChars = (text: string): string => text.slice(3);

console.log(removeFirstThreeChars('abcdefg'))
console.log(removeFirstThreeChars('1234'))
console.log(removeFirstThreeChars('fgedcba'))

// Task 6

console.log("")
console.log("Task 6")
console.log("")

const getLastThreeChars = (text: string): string => text.slice(-3);

console.log(getLastThreeChars('abcdefg'))
console.log(getLastThreeChars('1234'))
console.log(getLastThreeChars('fgedcba'))

// Task 7

console.log("")
console.log("Task 7")
console.log("")

const getFirstThreeChars = (text: string): string => text.slice(0, 3);

console.log(getFirstThreeChars('abcdefg'))
console.log(getFirstThreeChars('1234'))
console.log(getFirstThreeChars('fgedcba'))

// Task 8

console.log("")
console.log("Task 8")
console.log("")

const getFirstHalf = (text: string): string => text.slice(0, Math.round(text.length / 2));

console.log(getFirstHalf('abcdefg'))
console.log(getFirstHalf('1234'))
console.log(getFirstHalf('gedcba'))

// Task 9

console.log("")
console.log("Task 9")
console.log("")

const removeLastThreeChars = (text: string): string => text.slice(0, -3);

console.log(removeLastThreeChars('abcdefg'))
console.log(removeLastThreeChars('1234'))
console.log(removeLastThreeChars('fgedcba'))

// Task 10

console.log("")
console.log("Task 10")
console.log("")

const getPercentageOf = (num1: number, num2: number): number => num1 / 100 * num2;

console.log(getPercentageOf(100, 50))
console.log(getPercentageOf(10, 1))
console.log(getPercentageOf(500, 25))

// Task 11

console.log("")
console.log("Task 11")
console.log("")

const calculateSix = (a: number, b: number, c: number, d: number, e: number, f: number): number => ((a+b-c)*d/e)**f;

console.log(calculateSix(6,5,4,3,2,1))
console.log(calculateSix(6,2,1,4,2,3))
console.log(calculateSix(2,3,6,4,2,3))

// Task 12

console.log("")
console.log("Task 12")
console.log("")

const isEven = (a: number): boolean => !(a % 2);

console.log(isEven(10))
console.log(isEven(-4))
console.log(isEven(5))
console.log(isEven(-111))

// Task 13

console.log("")
console.log("Task 13")
console.log("")

const countOccurancesInString = (char: string, text: string): number => {
    const textArray = text.split("")

    const filteredArray = textArray.filter(element => element === char)

    return filteredArray.length
}

console.log(countOccurancesInString('m', 'how many times does the character occur in this sentence?'))
console.log(countOccurancesInString('h', 'how many times does the character occur in this sentence?'))
console.log(countOccurancesInString('?', 'how many times does the character occur in this sentence?'))
console.log(countOccurancesInString('z', 'how many times does the character occur in this sentence?'))

// Task 14

console.log("")
console.log("Task 14")
console.log("")

const isInteger = (a: number): boolean => !(a % 1);

console.log(isInteger(4))
console.log(isInteger(1.123))
console.log(isInteger(1048))
console.log(isInteger(10.48))

// Task 15

console.log("")
console.log("Task 15")
console.log("")

const divideOrMultiply = (a: number, b: number): number => a < b ? a / b : a * b;

console.log(divideOrMultiply(10, 100))
console.log(divideOrMultiply(90, 45))
console.log(divideOrMultiply(8, 20))
console.log(divideOrMultiply(2, 0.5))

// Task 16

console.log("")
console.log("Task 16")
console.log("")

const joinStrings = (a: string, b: string): string => a.includes(b) ? b + a : a + b;

console.log(joinStrings('cheese', 'cake'))
console.log(joinStrings('lips', 's'))
console.log(joinStrings('Java', 'script'))
console.log(joinStrings(' think, therefore I am', 'I'))

// Task 17

console.log("")
console.log("Task 17")
console.log("")

const roundToTwoDecimalPlaces = (a: number): number => +a.toFixed(2);

console.log(roundToTwoDecimalPlaces(2.12397))
console.log(roundToTwoDecimalPlaces(3.136))
console.log(roundToTwoDecimalPlaces(1.12397))
console.log(roundToTwoDecimalPlaces(26.1379))

// Task 18

console.log("")
console.log("Task 18")
console.log("")

const numberToDigitArray = (a: number): number[] => {
    const splitArray = a.toString().split("")
    const filteredArray = splitArray.map(num => parseInt(num))
    return filteredArray
}

console.log(numberToDigitArray(10))
console.log(numberToDigitArray(931))
console.log(numberToDigitArray(193278))

// Task 19

console.log("")
console.log("Task 19")
console.log("")

const cleanAndJoinStrings = (a: string, b: string): string => {
    let text = a + b.split("").reverse().join("")
    text = text.replace("%", "")
    const result = text[0].toUpperCase() + text.slice(1)
    return result
}

console.log(cleanAndJoinStrings('java', 'tpi%rcs'))
console.log(cleanAndJoinStrings('c%ountry', 'edis'))
console.log(cleanAndJoinStrings('down', 'nw%ot'))

// Task 20

console.log("")
console.log("Task 20")
console.log("")

const closestPrime = (a: number): number => {
    
    const isPrime = (num: number): boolean => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }

    if (isPrime(a)) {
        return a
    } else {
        for (let i = a; true; i++) {
            if (isPrime(i)) {
                return i
            }
        }
    }
};

console.log(closestPrime(38))
console.log(closestPrime(7))
console.log(closestPrime(115))
console.log(closestPrime(2000))

// Task 21

console.log("")
console.log("Task 21")
console.log("")

const closestDivisibleNaturalNumber = (x: number, y: number): number => {
    const isDivisible = (a: number, b: number): boolean => {
        return !(a % b)
    }
    
    if (isDivisible(x, y)) {
        return x
    }

    for (let i = x; true; i++) {
        if (i >= 0 && isDivisible(i, y)) {
            return i
        }
    }
}

console.log(closestDivisibleNaturalNumber(1, 23))
console.log(closestDivisibleNaturalNumber(23, 23))
console.log(closestDivisibleNaturalNumber(7, 3))
console.log(closestDivisibleNaturalNumber(-5, 7))

// Task 22

console.log("")
console.log("Task 22")
console.log("")

const appendAfterEveryThirdChar = (text: string, char: string): string => {
    const textArray = text.split("").reverse()
    let i = 0
    const appendedArray = textArray.map(element => {
        i++
        if (!(i % 3)) {
            return char + element
        }
        return element
    })
    
    return appendedArray.reverse().join('')
}

console.log(appendAfterEveryThirdChar('1234567','.'))
console.log(appendAfterEveryThirdChar('abcde','$'))
console.log(appendAfterEveryThirdChar('zxyzxyzxyzxyzxyz','w'))

// Task 23

console.log("")
console.log("Task 23")
console.log("")

const ALPHABET = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const toNextLettersInAlphabet = (text: string): string => {
    const changedArray = text.split("").map(letter => {
        return ALPHABET[ALPHABET.indexOf(letter)+1]
    })
    return changedArray.join("")
}

console.log(toNextLettersInAlphabet('bnchmf'))
console.log(toNextLettersInAlphabet('bgddrd'))
console.log(toNextLettersInAlphabet('sdrshmf'))

// Task 24

console.log("")
console.log("Task 24")
console.log("")

const getNthElement = (arr: any[], n: number): any => arr[n-1];

console.log(getNthElement([1,2,3,4,5],3))
console.log(getNthElement([10,9,8,7,6],5))
console.log(getNthElement([7,2,1,6,3],1))

// Task 25

console.log("")
console.log("Task 25")
console.log("")

const removeFirstThree = (arr: any[]): any[] => arr.splice(3, 3);

console.log(removeFirstThree([1,2,3,4,5]))
console.log(removeFirstThree([5,4,3,2,1,0]))
console.log(removeFirstThree([99,1,1]))

// Task 26

console.log("")
console.log("Task 26")
console.log("")

const getLastThree = (arr: any[]): any[] => arr.splice(-3);

console.log(getLastThree([1,2,3,4,5]))
console.log(getLastThree([5,4,3,2,1,0]))
console.log(getLastThree([99,1,1]))

// Task 27

console.log("")
console.log("Task 27")
console.log("")

const getFirstThree = (arr: any[]): any[] => arr.splice(0, 3);

console.log(getFirstThree([1,2,3,4,5]))
console.log(getFirstThree([5,4,3,2,1,0]))
console.log(getFirstThree([99,1,1]))

// Task 28

console.log("")
console.log("Task 28")
console.log("")

const getLastElements = (arr: any[], n: number): any[] => arr.splice(-n);

console.log(getLastElements([1,2,3,4,5], 2))
console.log(getLastElements([1,2,3], 6))
console.log(getLastElements([1,2,3,4,5,6,7,8], 3))

// Task 29

console.log("")
console.log("Task 29")
console.log("")

const removeElementFromArray = (arr: any[], target: any): any[] => {
    const result = arr.filter(element => {
        if (element === target) {
            return false
        }
        return true
    })

    return result
}

console.log(removeElementFromArray([1,2,3], 2))
console.log(removeElementFromArray([1,2,'2'], '2'))
console.log(removeElementFromArray([false,'2',1], false))
console.log(removeElementFromArray([1,2,'2',1], 1))

// Task 30

console.log("")
console.log("Task 30")
console.log("")

const getLength = (arr: any[]): number => arr.length;

console.log(getLength([1,2,2,4]))
console.log(getLength([9,9,9]))
console.log(getLength([4,3,2,1,0]))

// Task 31

console.log("")
console.log("Task 31")
console.log("")

const getNegativeLength = (arr: number[]): number => {
    const negativeArray = arr.filter(el => el < 0)
    return negativeArray.length
}

console.log(getNegativeLength([1,-2,2,-4]))
console.log(getNegativeLength([0,9,1]))
console.log(getNegativeLength([4,-3,2,1,0]))

// Task 32

console.log("")
console.log("Task 32")
console.log("")

const sortDesc = (arr: number[]): number[] => arr.sort().reverse()

console.log(sortDesc([1,3,2]))
console.log(sortDesc([4,2,3,1]))

// Task 33

console.log("")
console.log("Task 33")
console.log("")

const sortString = (arr: string[]): string[] => arr.sort()

console.log(sortString(['b','c','d','a']))
console.log(sortString(['z','c','d','a','y','a','w']))

// Task 34

console.log("")
console.log("Task 34")
console.log("")

const average = (arr: number[]): number => arr.reduce((prev, curr) => prev + curr) / arr.length

console.log(average([10,100,40]))
console.log(average([10,100,1000]))
console.log(average([-50,0,50,200]))

// Task 35

console.log("")
console.log("Task 35")
console.log("")

const longest = (arr: string[]): string => arr.reduce((a, b) => a.length > b.length ? a : b )

console.log(longest(['help','me']))
console.log(longest(['need','candy']))

// Task 36

console.log("")
console.log("Task 36")
console.log("")

const allAreEqual = (arr: any[]): boolean => arr.every(el => el === arr[0])

console.log(allAreEqual([true, true, true, true]))
console.log(allAreEqual(['test', 'test', 'test']))
console.log(allAreEqual([1,1,1,2]))
console.log(allAreEqual(['10',10,10,10]))

// Task 37

console.log("")
console.log("Task 37")
console.log("")

const combineArrays = (...args: any[]): any[] => args.reduce((a: any[], b: any[]) => a.concat(b))

console.log(combineArrays([1, 2, 3], [4, 5, 6]))
console.log(combineArrays(['a', 'b', 'c'], [4, 5, 6]))
console.log(combineArrays([true, true], [1, 2], ['a', 'b']))

// Task 38

console.log("")
console.log("Task 38")
console.log("")

const sortByB = (arr: {a: number, b: number}[]): any => {
    let temp = {a: 0, b: 0}
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i].b > arr[i+1].b) {
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            i = 0
        }
    }

    return arr
}

console.log(sortByB([{a:1,b:2},{a:5,b:4}]))
console.log(sortByB([{a:2,b:10},{a:5,b:4}]))
console.log(sortByB([{a:1,b:7},{a:2,b:1}]))

// Task 39

console.log("")
console.log("Task 39")
console.log("")

const mergeArrays = (arr1: number[], arr2: number[]): number[] => {
    const arr = arr1.concat(arr2)
    arr.sort((a,b) => a > b ? 1 : b>a ? -1 : 0)

    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] === arr[i+1]) {
            arr.splice(i, 1)
            i--
        }
    }
    return arr
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]))
console.log(mergeArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))

// Task 40

console.log("")
console.log("Task 40")
console.log("")

const mapSum = (arr: number[], sumNum: number): number => arr.reduce((a, b) => b > sumNum ? b + a : a, 0);

console.log(mapSum([1, 2, 3, 4, 5, 6, 7], 2))
console.log(mapSum([-10, -11, -3, 1, -4], -3))
console.log(mapSum([78, 99, 100, 101, 401], 99))

// Task 41

console.log("")
console.log("Task 41")
console.log("")

const createConsecutiveNumberArray = (min: number, max: number): number[] => {
    const arr: number[] = []
    for (let i = min; i < max+1; i++) {
        arr.push(i)
    }
    return arr
}

console.log(createConsecutiveNumberArray(2, 10))
console.log(createConsecutiveNumberArray(1, 3))
console.log(createConsecutiveNumberArray(-5, 5))
console.log(createConsecutiveNumberArray(2, 7))

// Task 42

console.log("")
console.log("Task 42")
console.log("")

const arrayToObjectSortedByFirstLetter = (arr: string[]): object => {
    const newObject: any = {}
    arr.sort()
    arr.forEach(element => {
        const letter = element[0].toLowerCase()
        if (!newObject.hasOwnProperty(letter)) {
            eval('newObject.'+ letter + ' = ' + '[]')
        }
        eval('newObject.'+ letter + '.push("' + element + '")')
    });
    return newObject
}

console.log(arrayToObjectSortedByFirstLetter(['Alf', 'Alice', 'Ben']))
console.log(arrayToObjectSortedByFirstLetter(['Ant', 'Bear', 'Bird']))
console.log(arrayToObjectSortedByFirstLetter(['Berlin', 'Paris', 'Prague']))

// Task 43

console.log("")
console.log("Task 43")
console.log("")

const copyArrayAndAddANumber = (arr: any[], newNum: number): any[] => {
    const newArr = [...arr]
    newNum = newNum < 6 ? 0 : newNum

    return [newNum].concat(newArr)
}

console.log(copyArrayAndAddANumber([1,2,3], 6))
console.log(copyArrayAndAddANumber(['a','b'], 2))
console.log(copyArrayAndAddANumber([null,false], 11))

// Task 44

console.log("")
console.log("Task 44")
console.log("")

const createArrayFromNthElements = (arr: any[], n: number): any[] => {
    const newArr: any[] = []

    arr.forEach((element, index) => {
        if ((index+1) % n == 0) {
            newArr.push(element)
        }
    });
    return newArr
}

console.log(createArrayFromNthElements([1,2,3,4,5,6,7,8,9,10], 3))
console.log(createArrayFromNthElements([10,9,8,7,6,5,4,3,2,1], 5))
console.log(createArrayFromNthElements([7,2,1,6,3,4,5,8,9,10], 2))

// Task 45

console.log("")
console.log("Task 45")
console.log("")

const getCountry = (obj: {country: string, [key: string]: unknown}): string => obj.country

console.log(getCountry({  continent: 'Asia',  country: 'Japan'}))
console.log(getCountry({  country: 'Sweden',  continent: 'Europe'}))

// Task 46

console.log("")
console.log("Task 46")
console.log("")

const getProp2 = (obj: {'prop-2': any, [key: number|string]: unknown}): string => obj["prop-2"]

console.log(getProp2({  one: 1,  'prop-2': 2}))
console.log(getProp2({  'prop-2': 'two',  prop: 'test'}))

// Task 47

console.log("")
console.log("Task 47")
console.log("")

const getPropertyWithName = (obj: object, target: string): string => eval('obj.' + target)

console.log(getPropertyWithName({  continent: 'Asia',  country: 'Japan'}, 'continent'))
console.log(getPropertyWithName({  country: 'Sweden',  continent: 'Europe'}, 'country'))

// Task 48

console.log("")
console.log("Task 48")
console.log("")

const hasProperty = (obj: object, target: string): boolean => obj.hasOwnProperty(target)

console.log(hasProperty({a:1,b:2,c:3},'b'))
console.log(hasProperty({x:'a',y:'b',z:'c'},'a'))

// Task 49

console.log("")
console.log("Task 49")
console.log("")

const stringToObjectValue = (str: string): object => {return { key: str }}

console.log(stringToObjectValue('a'))
console.log(stringToObjectValue('z'))
console.log(stringToObjectValue('b'))

// Task 50

console.log("")
console.log("Task 50")
console.log("")

const stringsToObject = (key: string, value: string): object => {return { [key]: value }}

console.log(stringsToObject('a', 'b'))
console.log(stringsToObject('z', 'x'))
console.log(stringsToObject('b', 'w'))

// Task 51

console.log("")
console.log("Task 51")
console.log("")

const ArraysToKeyValuePairs = (keyArr: any[], valueArr: any[]): object => {
    const newObj: {[key: number|string]: unknown}  = {}
    
    for (let i = 0; i < keyArr.length; i++) {
        if (typeof keyArr[i] == 'string') {
            eval('newObj.' + keyArr[i] + ' = valueArr[i]')
        } else {
            newObj[keyArr[i]] = valueArr[i]
        }
    }

    return newObj
}

console.log(ArraysToKeyValuePairs(['a','b','c'],[1,2,3]))
console.log(ArraysToKeyValuePairs(['w','x','y','z'],[10,9,5,2]))
console.log(ArraysToKeyValuePairs([1,'b'],['a',2]))

// Task 51

console.log("")
console.log("Task 51")
console.log("")

const getObjectKeys = (obj: object): any[] => Object.keys(obj)

console.log(getObjectKeys({a:1,b:2,c:3}))
console.log(getObjectKeys({j:9,i:2,x:3,z:4}))
console.log(getObjectKeys({w:15,x:22,y:13}))

// Task 52

console.log("")
console.log("Task 52")
console.log("")

const sumValues = (obj: object): number => {
    const values = Object.values(obj)
    const result = values.reduce((a: number, b: number) => a + b)
    return result
}

console.log(sumValues({a:1,b:2,c:3}))
console.log(sumValues({j:9,i:2,x:3,z:4}))
console.log(sumValues({w:15,x:22,y:13}))

// Task 53

console.log("")
console.log("Task 53")
console.log("")

const removeB = (obj: {[key: string]: unknown} ): object => {
    if (obj.hasOwnProperty('b')) {
        delete obj.b
    }
    return obj
}

console.log(removeB({ a: 1, b: 7, c: 3 }))
console.log(removeB({ b: 0, a: 7, d: 8 }))
console.log(removeB({ e: 6, f: 4, b: 5, a: 3 }))

// Task 54

console.log("")
console.log("Task 54")
console.log("")

const mergeObjects = (obj1: object, obj2: object): object => {return {...obj2, ...obj1}}

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))
console.log(mergeObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }))

// Task 55

console.log("")
console.log("Task 55")
console.log("")

const multiplyValues = (obj: object, multiplicator: number): object => {
    const keys = Object.keys(obj)

    keys.forEach(key => {
        eval('obj.' + key + '*= multiplicator')
    });
    return obj
}

console.log(multiplyValues({a:1,b:2,c:3},3))
console.log(multiplyValues({j:9,i:2,x:3,z:4},10))
console.log(multiplyValues({w:15,x:22,y:13},6))

// Task 56

console.log("")
console.log("Task 56")
console.log("")

const swapKeysWithValues = (obj: object): object => {
    const newObj: {[key: string|number]: unknown} = {}
    const keys = Object.keys(obj)
    const values = Object.values(obj)

    for (let i = 0; i < keys.length; i++) {
        if (typeof values[i] == 'string') {
            eval('newObj.' + values[i] + ' = keys[i]')
        } else {
            newObj[values[i]] = keys[i]
        }
    }
    return newObj
}

console.log(swapKeysWithValues({z:'a',y:'b',x:'c',w:'d'}))
console.log(swapKeysWithValues({2:'a',4:'b',6:'c',8:'d'}))
console.log(swapKeysWithValues({a:1,z:24}))

// Task 57

console.log("")
console.log("Task 57")
console.log("")

const objectWhitespaceToNull = (obj: {[key: string|number]: string}): object => {
    
    for (const key in obj) {
        if (obj[key].trim() == '') {
            obj[key] = null
        }
    }
    return obj
}

console.log(objectWhitespaceToNull({ a: 'a', b: 'b', c: '' }))
console.log(objectWhitespaceToNull({ a: '', b: 'b', c: ' ', d: 'd' }))
console.log(objectWhitespaceToNull({ a: 'a', b: 'b ', c: ' ', d: '' }))

// Task 58

console.log("")
console.log("Task 58")
console.log("")

const personData = (obj: {fn: string, ln: string, size?: number, weight?: number, [key: string|number]: unknown}): object => {
    const {fn, ln, size, weight} = obj

    const newObj: {fullName: string, lastName: string, size: string, weight: string} = 
    {fullName: fn, lastName: ln, size: `${size}cm`, weight: `${weight}kg`}

    if (weight == undefined) {
        delete newObj.weight
    }

    if (size == undefined) {
        delete newObj.size
    }
    return newObj
}

console.log(personData({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}))
console.log(personData({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}))
console.log(personData({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}))

// Task 59

console.log("")
console.log("Task 59")
console.log("")

const addContinentToObjectArray = (arr: [{[key: string]: unknown}, ...Array<object> ], continent: string): object[] => {
    const newArr: object[] = []
    
    arr.forEach(element => {
        newArr.push({...element, continent: continent})
    });
    
    return newArr
}

console.log(addContinentToObjectArray([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'))
console.log(addContinentToObjectArray([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'))

// Task 60

console.log("")
console.log("Task 60")
console.log("")

const arrayToCounterObject = (arr: number[]): object => {
    const newObj: {[key: number]: number} = {}

    arr.forEach(element => {
        if (!newObj.hasOwnProperty(element)) {
            newObj[element] = 0
        }

        newObj[element] += 1
    });

    return newObj
}

console.log(arrayToCounterObject([1,2,2,3]))
console.log(arrayToCounterObject([9,9,9,99]))
console.log(arrayToCounterObject([4,3,2,1]))

// Task 61

console.log("")
console.log("Task 61")
console.log("")

const datesAreEqual = (date1: Date, date2: Date): boolean => date1.getTime() == date2.getTime()

console.log(datesAreEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))
console.log(datesAreEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))
console.log(datesAreEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))

// Task 62

console.log("")
console.log("Task 62")
console.log("")

const getDateDayDifference = (date1: Date, date2: Date): number => {
    const timeDifference = Math.abs(date1.getTime() - date2.getTime())
    const dayDifference = timeDifference/(1000*60*60*24)
    return dayDifference
}

console.log(getDateDayDifference(new Date('2020-06-11'), new Date('2020-06-01')))
console.log(getDateDayDifference(new Date('2000-01-01'), new Date('2020-06-01')))

// Task 63

console.log("")
console.log("Task 63")
console.log("")

const dateOnSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();
}

console.log(dateOnSameDay(new Date('2000/01/01'), new Date('2000/01/01')))
console.log(dateOnSameDay(new Date('2000/01/01'), new Date('2000/01/02')))
console.log(dateOnSameDay(new Date('2001/01/01'), new Date('2000/01/01')))
console.log(dateOnSameDay(new Date('2000/11/01'), new Date('2000/01/01')))