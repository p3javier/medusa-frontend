type LoginErrorInputProps = {
  show: boolean;
  code: string;
};
const LoginError = (props: LoginErrorInputProps) => {
  if (props.show) {
    // return <p>{props.code}</p>;
    return <p className="my-1 text-rose-500">⚠️ {props.code}</p>;
  }
  return null;
};

export { LoginError };
