interface ButtonProps {
  children: string;
}

export default function Button(props: ButtonProps) {
  const { children } = props;

  return <div>{children}</div>;
}
