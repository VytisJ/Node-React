import { useState } from "react";
import { useEffect, useCallback, useMemo } from "react";

const CallbackMemoExamples = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {}, []);

  const callbackFunction = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const memoizedValue = useMemo(() => {
    const arr = [];

    for (let index = 0; index < 10000; index++) {
      arr.push(index, count);
    }

    return arr;
  }, [count]);

  const getValue = () => {
    const arr = [];

    for (let index = 0; index < 10000; index++) {
      arr.push(index);
    }

    return arr;
  };

  const value = getValue();

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default CallbackMemoExamples;
