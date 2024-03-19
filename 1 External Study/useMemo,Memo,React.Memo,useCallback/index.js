/*

React.memo:
 
Type: Higher-order component (HOC).
Purpose: It's used to memoize functional components.
Behavior: Wrapping a functional component with React.memo memoizes the result of rendering that component based on its props. It prevents unnecessary re-renders by shallowly comparing the previous and current props.

Example:

const MyComponent = React.memo(function MyComponent(props) {
  Component logic
});


-----------------------------------------------------------------------------------------------
useMemo:

Type: Hook.
Purpose: It's used to memoize the result of a function or computation within a functional component.
Behavior: useMemo accepts a function and an array of dependencies. It will recompute the memoized value only when one of the dependencies has changed. This helps optimize expensive calculations or prevents unnecessary recalculations.

Example:

const memoizedValue = useMemo(() => expensiveFunction(a, b), [a, b]);

-----------------------------------------------------------------------------------------------

memo (from React):

Type: Function.
Purpose: It's similar to React.memo, but it's used for class components instead of functional components.
Behavior: By wrapping a class component with memo, you can achieve similar memoization behavior as with React.memo. It will shallowly compare props and prevent re-renders if props remain the same.

class MyComponent extends React.Component {
  // Component logic
}
export default React.memo(MyComponent);

-----------------------------------------------------------------------------------------------

useCallback:

Type: Hook.
Purpose: It's used to memoize callback functions to prevent unnecessary re-creation of callback references.
Behavior: useCallback returns a memoized callback function. It's useful when passing callbacks to child components that rely on reference equality to prevent unnecessary re-renders.
Example:

const memoizedCallback = useCallback(() => {
  // Callback logic
}, [dependency]);


*/