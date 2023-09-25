import { ChangeEventHandler } from 'react';

type TextInputProps = {
  readonly label: string;
  readonly name: string;
  onStatusChange: ChangeEventHandler<HTMLInputElement>;
};
const Checkbox = (props: TextInputProps) => (
  <div>
    <input
      onChange={props.onStatusChange}
      name={props.name}
      className="text-black mr-2 font-semibold indent-3 antialiased rounded-lg mt-2"
      type="checkbox"
    />
    <label className="antialiased" htmlFor={props.name}>
      {props.label}
    </label>
  </div>
);

export { Checkbox };
