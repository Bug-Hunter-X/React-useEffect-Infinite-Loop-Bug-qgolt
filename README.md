# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by improperly updating state within the dependency array.  The `count` state is incremented within the `useEffect` hook, causing it to trigger repeatedly, leading to a performance bottleneck and potential application crashes.

## Bug Description
The `useEffect` hook is intended for performing side effects, such as data fetching or DOM manipulation.  However, updating state within the `useEffect`'s dependency array can create an infinite loop. In this case, `setCount(count + 1)` inside the `useEffect` causes the component to re-render, triggering `useEffect` again, and this cycle continues indefinitely.

## Solution
The solution involves correctly managing state updates and avoiding updating the state within the `useEffect` hook's dependency array. The corrected code uses the `useRef` hook to update the count without triggering a re-render.