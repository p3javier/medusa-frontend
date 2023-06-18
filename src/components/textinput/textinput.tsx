import { ChangeEventHandler } from 'react';

type TextInputProps = {
  readonly label: string;
  readonly name: string;
  readonly placeholder?: string;
  readonly type?: HTMLInputElement['type'];
  onNameChange: ChangeEventHandler<HTMLInputElement>;
};
const TextInput = (props: TextInputProps) => (
  <div>
    <label className="antialiased" htmlFor={props.name}>
      {props.label}
    </label>
    <br />
    <input
      onChange={props.onNameChange}
      name={props.name}
      className="text-black font-semibold indent-3 antialiased rounded-lg mt-2 placeholder:text-slate-400 placeholder:font-bold placeholder:indent-3"
      type={props.type || 'text'}
      placeholder={props.placeholder || ' '}
    />
  </div>
);

export { TextInput };
