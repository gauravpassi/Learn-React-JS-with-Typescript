import { useState } from "react";

export default function Demo() {
    interface Reverse{
        label :  any;
        count : number;
    }
  const [val, setVal] = useState<string>("");
  const [reverse, setReverse] = useState<Reverse[]>([]);


  function changeText(e: any) {
    setVal(e.target.value);
  }
  function rev() {

    for (let i = 0; i <val.length; i++) {
        const found = reverse.find(item => item.label === val[i])
        
        if(!found){
            let count = 0
            for( let j= 1;j<val.length;j++){
                if(val[i] === val[j] ){
                    count++;
                }
            }
            const arr = [...reverse, {label: val[i], count}]
            setReverse(arr)
        }      
    }
  }

  return (
    <div style={{ flexDirection: "column", display: "flex", width: "50%" }}>
      <label>Reversible Function</label>
      <input placeholder="enter any value" onChange={changeText} />
      <button onClick={rev}>Click Me</button>
      <br/>
      {reverse.map((item) => 
      <div>
        <label>{item.label}{" : "}{item.count}</label></div>)}
    </div>
  );
}
