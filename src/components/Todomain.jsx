import React,{useState}from 'react'

function Todomain() {
    const[name,setName]=useState("")
    const[items,setItems]=useState([])
    
    function handleClick(e){

        const newName = e.target.value
        // console.log(newName)
          setName(newName)
    }

    function setvalue(e){
        e.preventDefault()
       setItems(prev=>{
        return [...prev,name]
       })
      setName(" ")
    }

    
    return (
        <div className='bg-card'>
            <div className='todoMain'>
                <div className='title'>
                    <h1>To do list</h1>
                    <img src="/pngegg.png" alt="t" />
                </div>
                <form>
                    <input onChange={handleClick}name='inp' type="text" placeholder="TO Do List"  value={name}/>
                    <button onClick={setvalue} type='submit'>ADD</button>
                </form>
                <ul>
                    {items.map(eachItem=>{
                        return <li>{eachItem}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Todomain