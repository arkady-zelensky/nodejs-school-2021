// //Author Igor Kyrylchuk
// //Yalantis School homework
// //Lecture_01

// //Task 0
function add(a) {
    const validate=param=>(param && typeof(param)=='number') ? param : 0;
    let currentSum = validate(a);
    function sum(b) {
        currentSum += validate(b);
        return sum;
    }
    sum.toString=()=>currentSum;
    return sum;
}
console.log(add(2)(5)(7)(1)(6)(5)(10)().toString());

// //Task 1
const anagram=(str1, str2)=>(String(str1).toLowerCase().split('').sort().join('')==String(str2).toLowerCase().split('').sort().join('')) ? true : false;
console.log(anagram('Igor','Rogi'));

// //Taks 2
function clone(object) {
    let newobj={};
    Reflect.ownKeys(object).forEach((item)=>{
        Reflect.defineProperty(newobj,item,Reflect.getOwnPropertyDescriptor(object,item));
        if(typeof(object[item])=='object'){ Reflect.set(newobj,item,clone(object[item])); }
    });
    return newobj;
};
let clone_obj=clone({a:1,b:2,c(){console.log('cloned object')},d:{da:12,db:34}});
console.log(clone_obj);

// //Task 3
const add2 = (a, b) => a+b;
const wrapper = (args) => {
    const func=args;
    const cache=new Map();
    function cache_func(...params)
    {
        const res=cache.get(params.toString());
        if(res){ return `${res} from cache`; }
        else{
            const func_res=func(...params);
            cache.set(params.toString(),func_res);
            return `${func_res} calculated`;
        }
    }
    return cache_func;
};
const cachedAdd = wrapper(add2);
console.log(cachedAdd(2,2)); // 4 calculated
console.log(cachedAdd(5,8)); // 13 calculated
console.log(cachedAdd(2,2)); // 4 from cache
console.log(cachedAdd(1,0));
console.log(cachedAdd(1,0));
console.log(cachedAdd(1,0));