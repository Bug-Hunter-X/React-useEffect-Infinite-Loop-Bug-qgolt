```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    // Correct logic: Update countRef without triggering re-renders
    countRef.current = countRef.current + 1;
    console.log('useEffect Count:', countRef.current);
  }, []);

  return <div>Count: {count}</div>;
}
export default MyComponent;
```