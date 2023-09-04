interface TextProps {
  children: string;
  fontSize?: number;
  fontWidth?: string;
  color?: string;
}

export default function TextView(props: TextProps) {
    const {children, fontSize = 16, color='black' } = props
  return <div style={{fontSize , color}}>{children}</div>;
}
