import { ChangeEventHandler } from 'react';

type CheckboxInputProps = {
  readonly required?: boolean;
  readonly label: string;
  readonly name: string;
  onStatusChange: ChangeEventHandler<HTMLInputElement>;
};
const Checkbox = (props: CheckboxInputProps) => (
  <div>
    <input
      onChange={props.onStatusChange}
      name={props.name}
      className="text-black mr-2 font-semibold indent-3 antialiased rounded-lg mt-2"
      type="checkbox"
      required={props.required}
    />
    <label className="antialiased" htmlFor={props.name}>
      {props.label}
    </label>
  </div>
);

export { Checkbox };
