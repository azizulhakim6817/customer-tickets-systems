## Natlify Live link : 
https://customer-tickets-systems.netlify.app/

## github live link: 
https://github.com/azizulhakim6817/customer-tickets-systems

# React Project

## 1. What is JSX, and why is it used?

JSX is a syntax extension for JavaScript that looks like HTML. It is used in React to describe the UI structure in a readable way.

## 2. What is the difference between State and Props?

- **State:** Local data of a component, can change over time.
- **Props:** Data passed from parent to child, read-only inside the child.

## 3. What is the useState hook, and how does it work?

`useState` is a React hook to add state to functional components.  
It returns a state value and a function to update it:

```js
const [count, setCount] = useState(0);
```

## 4. How can you share state between components in React?
By lifting the state up to a common parent and passing it down as props to child components.

## 5. How is event handling done in React?
React uses camelCase syntax for events and functions are passed directly:
```js
<button onClick={handleClick}>Click Me</button>
```
