interface TextProps {
  children: string;
  fontSize?: number;
}

export default function TextView(props: TextProps) {
    const {children, fontSize = 16} = props
  return <div style={{fontSize}}>{children}</div>;
}
