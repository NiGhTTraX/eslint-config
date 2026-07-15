// eslint-disable-next-line @typescript-eslint/require-await
async function test(foo: string) {
  // eslint-disable-next-line @typescript-eslint/only-throw-error
  throw foo;
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
test("foo");

// eslint-disable-next-line @typescript-eslint/no-explicit-any,no-unassigned-vars
let x: any;

// eslint-disable-next-line @typescript-eslint/no-floating-promises,@typescript-eslint/no-unsafe-argument
test(x);

enum Foo {
  A = "a",
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  B = "a",
}
declare let foo: Foo;

// eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
if (foo === "a") {
  console.log("a");
}

// eslint-disable-next-line prefer-const,@typescript-eslint/no-unnecessary-type-assertion
let bar: string = "a"!;

// eslint-disable-next-line prefer-template
void test("1" + bar);
