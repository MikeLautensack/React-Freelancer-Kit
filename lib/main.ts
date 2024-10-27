import HelloWorld from "./Components/HelloWorld";

export { HelloWorld };

export function helloAnything(thing: string): string {
  return `Hello ${thing}!`;
}
