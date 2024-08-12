import { FormEvent, useState } from "react";

interface Props {
  onSubmit: (text: string) => void;
}

export default function TodoForm(props: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
}
