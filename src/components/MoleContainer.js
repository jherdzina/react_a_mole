import React, { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'


function MoleContainer(props){
    let [ showMole, shouldShowMole ] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score +1)
        shouldShowMole(false)
    }
    let displayMole = showMole ? <Mole setScore={props} toggle={shouldShowMole} handleClick={handleClick} /> : <EmptySlot toggle={shouldShowMole} />

    const divStyle = {
    display : 'inline-block',
    width : '30vw'
    }
    

    return (
        <div style={divStyle}>
            {displayMole}
        </div>
    )
}
export default MoleContainer