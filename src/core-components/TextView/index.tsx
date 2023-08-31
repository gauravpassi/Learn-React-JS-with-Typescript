interface TextProps {
  children: string;
  fontSize?: number;
  fontWidth?: string;
}

export default function TextView(props: TextProps) {
    const {children, fontSize = 16, } = props
  return <div style={{fontSize, margin:'20px'}}><ul>{children}</ul></div>;
}
