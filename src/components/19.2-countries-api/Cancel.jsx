import React, { useState, useEffect } from 'react'
import Countries from './Countries'
function Cancel() {
    const [isLoadComponent, setisLoadComponent] = useState(true)


    return <div>
        <button onClick={() => setisLoadComponent(!isLoadComponent)}> cancel</button>
        { isLoadComponent && <Countries  />}
    </div>
}

export default Cancel