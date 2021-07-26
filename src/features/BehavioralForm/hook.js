import { useState } from "react";

const behaviorsData = [
  {
    name: "Barking",
    active: false,
  },
  {
    name: "Chewing",
    active: false,
  },
  {
    name: "Agression",
    active: false,
  },
  {
    name: "Food Guarding",
    active: false,
  },
  {
    name: "Howling",
    active: false,
  },
  {
    name: "Nibbling",
    active: false,
  },
  {
    name: "Separation Anxiety",
    active: false,
  },
  {
    name: "Whining",
    active: false,
  },
];

const useBehavioralForm = () => {
  const [behaviors, updateActiveBehaviors] = useState(behaviorsData);
  const toggleActiveBehaviour = (index) => array => {
    const newArray = array.map((e, i) => {
      if (i === index) return {
        ...e,
        active: !e.active
      };
      return e;
    });
    return updateActiveBehaviors(newArray);
  };

  return {
    behaviors,
    toggleActiveBehaviour,
    updateActiveBehaviors
  };
};

export default useBehavioralForm;