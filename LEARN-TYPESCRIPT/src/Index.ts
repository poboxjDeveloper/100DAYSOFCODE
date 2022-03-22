console.log("this is created with typescript");

/**
 * This is documentation
 * @param person De persoon
 * @param date The date
 * @param show should we show this
 */
function greet(person: string, date: Date, show: boolean): void {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  console.log("person type:", typeof person);
  console.log("date type:", typeof date);
  if (show) {
    console.log("show is true");
  }
  console.log("show", show);
}

greet("Greetings to my friend", new Date(), false);
greet("Greetings to Me", new Date(), true);

function calc(x: number, y: number): number {
  return x * y;
}

console.log("calc(7,7)", calc(7, 7));

function calcObject(o: object): number {
  let result: number;
  Object.keys(o).map((key) => {
    console.log(key, o[key], typeof key);
    if (typeof key === "number") {
      result * o[key];
    }
  });
  return result;
}

console.log(calcObject({ first: 2, second: 2, third: "third" }));

type obj = { first: number; second: number; third: string };

console.log(calcObject(new obj{firs}))
