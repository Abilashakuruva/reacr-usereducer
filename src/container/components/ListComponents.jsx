import React,{useMemo} from 'react'

const ListComponents = ({a,b}) => {
    const memoizedValue=useMemo(()=>{
        return a*b;
    },[a,b]);
    
  return (
    <div>
        <p>a: {a}</p>
        <p>b: {b}</p>
        <p>Memoized Value:{memoizedValue}</p>
      
    </div>
  )
}

export default ListComponents
