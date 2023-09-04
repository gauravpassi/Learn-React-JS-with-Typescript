import "./input.css";

interface InputProps {
  varient?: "outlined" | "standard" | "filled";
  placeholder?: string;
  name: string
  value?: string;
  title?: string;
  error?: string;
  type: 'text' | 'email' | 'password' | 'number'
  onTextChange?: (text: string) => void;
}

export default function InputView(props: InputProps) {
  const { varient = "standard", title, onTextChange , error, name} = props;

  var cls = "base";
  switch (varient) {
    case "standard": {
      cls += " standard";
      break;
    }
    case "outlined": {
      cls += " outlined";
      break;
    }
    case "filled": {
      cls += " filled";
      break;
    }
  }
  return (
    <div style={{ flexDirection: "column", display: "inline-flex", marginTop: 10 }}>
      {title && <label>{title}</label>}
      <input id={name} className={cls} {...props} onChange={(e) => onTextChange && onTextChange(e.target.value ?? "")} />
      <label style={{color:'red'}}>{error}</label>
    </div>
  );
}
