import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean; // ? means field is now optional
  i?: number;
  fn?: (bob: string) => void; // function expects a parameter called bob which is a string and will return nothing
  person?: Person;
}

const TextField: React.FC<Props> = ({}) => {
  const [count, setCount] = useState<number | null | undefined>(5); // state value can either be a number or null
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};

export default TextField;
