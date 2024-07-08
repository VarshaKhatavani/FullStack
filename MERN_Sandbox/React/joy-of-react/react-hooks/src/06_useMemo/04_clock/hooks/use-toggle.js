import React from "react";

function useToggle(initialValue = false) {
  if (typeof initialValue !== "boolean") {
    console.warn("Invalid type for useToggle");
  }

  const [value, setValue] = React.useState(initialValue);

  // Optimize the function which updates value
  const toggleValue = React.useMemo(() => {
    return function toggleValue() {
      setValue((currentValue) => !currentValue);
    };
  }, []);

  // console.log(toggleValue);

  return [value, toggleValue]; // return value & function
}

export default useToggle;
