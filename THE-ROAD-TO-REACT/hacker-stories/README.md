# The Road To Learn React

- [Project setup](https://courses.robinwieruch.de/p/the-road-to-learn-react)
- [Javascript fundamentals before learning React](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Variables use in react

On your journey as a React developer, and in this learning experience, you will come across both scenarios: variables defined outside and within a component. As a rule of thumb: If a variable does not need anything from within the function component's body (e.g. parameters), then define it outside of the component which avoids redefining it on every function call.

## const, let, var

info: [see](https://www.robinwieruch.de/const-let-var/)

- **var**:
  - not hoisted. So undefined if it's not defined and no ReferenceError)
  - not scoped.
- **let**:
  - hoisted. we get the actual ReferenceError if not defined.
  - block-scoped.
  - re-assignable
- **const**:
  - hoisted.
  - block-scoped
  - not re-assignable
  - immutable object not internal properties.
  - internal properties can be re-assigned
    - `const person = {first:"Peter", last:"Paul"}` can be re-assigned afterwards. `person.first = "Paul";`

So if const is used most often, because it doesn't give you the ability to re-assign variables, when should one use let instead of const? Commonly let is used in operations where variables have to change by necessity:

### Recommendations

- avoid var, because of its weird issues with scoping/hoisting
- use const as a default (signals variable shouldn't change)
- use let when variable should be re-assigned

## React JSX

- Javascript XML
  - combination of javascript and HTML
- uses specific attributes.
  - [HTML Attributes that are supported](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)
- [JSX on react website](https://reactjs.org/docs/introducing-jsx.html)

## Lists in React

- use **key** in dynamic content. [info](https://www.robinwieruch.de/react-list-key/) !!! Important for ordering.
- [Array object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
