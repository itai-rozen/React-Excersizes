import React , {useState, useEffect, useRef} from 'react'

const EditRef = () => {
    const [isAppear, setIsAppear] = useState(false)
    const [buttonContent, setButtonContent] = useState('edit')
    const inputRef = useRef()

    useEffect(() => {
        setButtonContent(isAppear? 'save' : 'edit')
        isAppear && inputRef.current.focus()
    },[isAppear])

    return <div>
        <button onClick={() => setIsAppear(!isAppear)}>{buttonContent}</button>
        {isAppear && <input type='text' ref={inputRef}  />}
    </div>
}

export default EditRef