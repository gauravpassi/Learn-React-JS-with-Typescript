import './button.css';

interface ButtonProps {
  children: string;
  size?: 'sm' | 'md' | 'lg';
  varient?: 'text' | 'contained' | 'outlined';
  onPress?:()=> void
}

export default function Button(props: ButtonProps) {
  const { children, size = 'md', varient = 'text', onPress } = props;

  var cls = 'button'
  switch(varient){
    case 'text':{
      cls += ' text';
      break;
    }
    case 'outlined':{
      cls += ' outlined';
      break;
    }
    case 'contained':{
      cls += ' contained';
      break;
    }
  }

  switch(size){
    case 'sm':{
      cls += ' sm';
      break;
    }
    case 'md':{
      cls += ' md';
      break;
    }
    case 'lg':{
      cls += ' lg';
      break;
    }
  }

  return (
    <div className={cls} onClick={()=> onPress && onPress()}  >
      {children}
    </div>
  );
}
