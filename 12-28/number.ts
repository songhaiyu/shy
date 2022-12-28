let num1: number = 1
let num2: number = 2
let sum: number = num1 + num2

/***string */
let str1: string = "初始ts"
let str2: string = "成长img"
let str: string = str1 + str2

/**object */
declare function create(o: object | null): void
create({ props: 0 })
create(null)
let obj: { name: string, age: number }
obj = { name: '小红', age: 19 }


/***void  没有返回值 */
function getName1(name: string, age: number): void {
    console.log();

}

function getName2(name: string, age: number): string {
    return name + age
}

interface use {
    name: string,
    age: number
}
interface per {
    sex: number
}
type allinfo = use & per
let person: use & per = { name: '小宋', age: 18, sex: 1 }


interface Person {
    name: string
    age: number
    sex: number,
    isJob: boolean
    hobby: string[]
    former: number
    formerName: [string, string]
}
let persons: Person = {
    name: '小张',
    age: 20,
    sex: 0,
    isJob: true,
    hobby: ['睡觉', '干饭'],
    former: 2,
    formerName: ['小李', '小刘']
}