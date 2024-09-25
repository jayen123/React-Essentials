import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';


export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];


export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component returns a piece of JSX, which defines how a section of the UI should appear.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX allows you to write HTML elements in JavaScript and place them in the DOM without using functions like appendChild(). JSX makes it easier to create and understand your React components.",
    code: `
const element = <h1>Hello, JSX!</h1>;`,
  },
  props: {
    title: "Props",
    description:
      "Props (short for properties) are a way to pass data from a parent component to a child component. Props allow you to customize and reuse components.",
    code: `
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Alice" />`,
  },
  state: {
    title: "State",
    description:
      "State is a built-in object that holds data or information about the component. It can change over time, usually as a result of user actions or network events, and determines how the component renders and behaves.",
    code: `
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}`,
  },
};
