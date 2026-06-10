// Implicit Types (Preferred way)
// let x = "Hello World";
// console.log(typeof x);
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Explicit Types
// let y: number;
// y = 101;
// y = "World"
// y = true;
// Custom Types
// type UserAgeType = string | number;
// let age: UserAgeType;
// age = "Twenty-two";
// age = 22;
// class Foo {}
// let foo: Foo;
// foo = new Foo();
// interface User {
//   name: string;
//   age: number;
// }
// let userOne: User;
// userOne = {
//   name: "John Doe",
//   age: 22,
// };
// console.log("Username : ", userOne.name);
// interface Post {
//     id: number;
//     title: string;
//     body: string;
// }
// let posts: Post[];
// TYPES IN TYPESCRIPT
// let varString: string;
// let varNumber: number;
// let varBoolean: boolean;
// let varDate: Date;
// varDate = new Date("June 10, 2026");
// let varObject: object;
// varObject = { name: "", age: "" };
// let varArray: Array<string>;
// varArray = ["Monica", "Ross", "Rachel"];
// let varNumberArray: number[];
// varNumberArray = [98, 92, 98, 99];
// let varTuple: [string, number, boolean];
// varTuple = ["Hello World", 23, true];
// let varFunc: Function;
// varFunc = function () {};
// let varAny: any;
// varAny = "Hello World";
// varAny = 101;
// varAny = {};
// varAny = [];
// let varUnknown: unknown;
// varUnknown = "Hello World";
// if (typeof varUnknown === "string") {
//   varUnknown.toUpperCase();
// }
// varUnknown = 101;
// if (typeof varUnknown === "number") {
//   varUnknown.toString();
// }
// varUnknown = { name: "John" };
// let username: string | null;
// function alwaysThrowError(): never {
//   throw new Error("Something went wrong");
// }
// window.onload = function () {
//   const txtInputEl = document.getElementById("txtInput") as HTMLInputElement;
//   const btnAddEl = document.getElementById("btnAdd") as HTMLButtonElement;
//   const listContainerEl = document.getElementById(
//     "listContainer",
//   ) as HTMLUListElement;
//   btnAddEl.addEventListener("click", function (event: PointerEvent) {
//     event.preventDefault();
//     let value = txtInputEl.value;
//     const liElement = document.createElement("li");
//     liElement.innerHTML = value.toUpperCase();
//     listContainerEl.appendChild(liElement);
//   });
// };
// ---------------
//  Class
// class Person {
//   private name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }
// class Student extends Person {
//   private studId: string;
//   private _age: number = 0;
//   static numberOfStudents = 0;
//   constructor(id: string, name: string) {
//     super(name);
//     this.studId = id;
//     Student.numberOfStudents += 1;
//   }
//   get age() {
//     return this._age;
//   }
//   set age(value: number) {
//     this._age = value;
//   }
//   public getDetails() {
//     return `
//         Student ID : ${this.studId}
//         Student Name : ${super.getName()}
//         Student Age : ${this.age}
//         Total Enrollled Students : ${Student.numberOfStudents}
//         `;
//   }
// }
// let monica = new Student("S001", "Monica Geller");
// monica.age = 22;
// // console.log(monica.getDetails());
// let ross = new Student("S002", "Ross Geller");
// ross.age = 24;
// console.log(ross.getDetails());
// ------------
// ABSTRACT CLASS
// abstract class Recipe {
//   abstract prepareIngredients(): void;
//   abstract cookRecipe(): void;
//   abstract cleanUpDishes(): void;
//   execute() {
//     this.prepareIngredients();
//     this.cookRecipe();
//     this.cleanUpDishes();
//   }
// }
// class Tea extends Recipe {
//   prepareIngredients(): void {
//     console.log("Bring tea leafs, water, milk and some sugar");
//   }
//   cookRecipe(): void {
//     console.log("boil water for 5 minutes and then add all ingredients");
//   }
//   cleanUpDishes(): void {
//     console.log("Wash all utensils");
//   }
// }
// let tea = new Tea();
// tea.execute();
// -----------------
// GENERICS
// function addAtBeggening<T>(value: T, collection: T[]): T[] {
//   return [value, ...collection];
// }
// const newCollection = addAtBeggening<string>("Joey", [
//   "Monica",
//   "Ross",
//   "Rachel",
// ]);
// console.log(typeof newCollection[0]);
// const numberCollection = addAtBeggening<number>(99, [98, 91, 89, 79]);
// console.log(typeof numberCollection[0]);
// GENERIC CLASS
// class List<T> {
//   private list: T[] = [];
//   add(item: T): void {
//     this.list.push(item);
//   }
//   remove(index: number) {
//     this.list.splice(index, 1);
//   }
//   getAllItem(): T[] {
//     return this.list.slice(0);
//   }
// }
// let stringList = new List<string>();
// stringList.add("Monica");
// stringList.add("Ross");
// stringList.add("Rachel");
// console.log("Before Remove : ", stringList.getAllItem());
// stringList.remove(0);
// console.log("After Remove : ", stringList.getAllItem());
// let numberList = new List<number>();
// numberList.add(99);
// numberList.add(98);
// numberList.add(92);
// numberList.add(95);
// console.log(numberList.getAllItem());
// interface Resource<T, K> {
//   resourceName: T;
//   resourceLocation: K;
// }
// let resourceOne: Resource<string, number> = {
//   resourceName: "Server - 1",
//   resourceLocation: 72.48,
// };
// console.log("Resorce One : ", resourceOne);
// Extending Genrics
// class Vehicle {
//   private type: number;
//   constructor(type: number) {
//     this.type = type;
//   }
//   getType() {
//     return this.type;
//   }
// }
// class Car extends Vehicle {
//   private model: string;
//   constructor(type: number, model: string) {
//     super(type);
//     this.model = model;
//   }
//   getDetails() {
//     return `
//         Car Type : ${super.getType()}
//         Car Model : ${this.model}
//         `;
//   }
// }
// function demoVehicle<T extends Vehicle>(vehicle: T) {
//   console.log("Vehicle : ", vehicle.getType());
// }
// let twoWheeler = new Vehicle(2);
// demoVehicle<Vehicle>(twoWheeler);
// let car = new Car(4, "Honda");
// demoVehicle<Car>(car);
// demoVehicle<string>("Hello World");
// -------------
function Logger(originalMethod, context) {
    console.log("Context : ", context);
    var methodName = String(context.name);
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Start of the Method : ", methodName);
        var result = originalMethod.call.apply(originalMethod, __spreadArray([this], args, false));
        console.log("End of the Method : ", methodName);
        return result;
    };
}
var Test = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _greet_decorators;
    return _a = /** @class */ (function () {
            function Test() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            Test.prototype.greet = function (name) {
                return "Hello ".concat(name);
            };
            return Test;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _greet_decorators = [Logger];
            __esDecorate(_a, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: function (obj) { return "greet" in obj; }, get: function (obj) { return obj.greet; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var t = new Test();
console.log(t.greet("Monica Geller"));
