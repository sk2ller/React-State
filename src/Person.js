import { useState } from 'react'
import image from './logo512.png'
const Person =()=>{
    const [name,setName] = useState('sk2ller')
    const [age,setAge] = useState('none')
    const [job,setJob] = useState('king')
    const hadleClick = () =>{
        setName('med')
        setAge('none again')
        setJob('killer')
    }
    const style={ color: 'white     ',fontweight:'bold'}
    const styles={fontweight:'bold',width:'7cm'}
    return(
        <div id="med" style={style }>
         <h1>FullName: {name}</h1>
         <h1>bio: {age}</h1>
         <h1>profession: {job}</h1>
         <button style={styles} id="yo" onClick={hadleClick}>click to cahnge</button>
         <br/>
         <img src={image}/>
        </div>
    )
}
export default Person;
