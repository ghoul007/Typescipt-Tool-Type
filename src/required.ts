interface Props {
    a?: number;
    b?: string;
  }
  
  const obj: Props = { a: 5 }; // OK
  
//   const obj2: Required<Props> = { a: 5 }; // Error: property 'b' missing


// limiitation
interface Props_1 {
  a?: number;
  b?: string;
  c?:{
    c1?: string,
    c2?: number
  }
}

const test1: Required<Props_1> = {
  a: 1,
  b: "b",
  c:{
    c1: "c1"
  }
} 

//solution: Custom Required

type PowerRequired<T>= {
  [U in keyof T]-?: T[U] extends object
  ? PowerRequired<T[U]>
  : T[U]
}
type NewPowerRequired = PowerRequired<Props_1>;

const test2: NewPowerRequired = {
  a: 1,
  b: "b",
  c:{
    c2: 44,
  }
} 

