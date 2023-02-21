import { useCallback, useRef } from "react";

export const useValue = <T>(initial: T): [T, (val: T) => void] => {
  const value = useRef(initial);
  const setValue = useCallback((newValue: T) => {
    value.current = newValue;
  }, []);

  return [value.current, setValue];
};
