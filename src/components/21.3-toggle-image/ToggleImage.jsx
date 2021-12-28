import React, {useState,useEffect,useRef} from 'react'
import './image.css'
const ToggleImage = () => {
    const imageRef = useRef(``)
    const image2Ref = useRef('')
    console.log(image2Ref)
    const filter1Img = (src) => {imageRef.current.src = src}
    const filter2Img = (src) => {image2Ref.current.src = src}


    useEffect(() => {
        imageRef.current.src = "./rick.jfif"
        image2Ref.current.src = "./morty.jfif"
    }, [])
    return <div class="image">
        <img ref={imageRef} onMouseEnter={() => filter1Img("./rickbw.jfif")} onMouseLeave={() => filter1Img("./rick.jfif")}  src="" alt="" />
        <img ref={image2Ref} onMouseEnter={() => filter2Img("./mortybw.jfif")} onMouseLeave={() => filter2Img("./morty.jfif")} alt="" />
    </div>
}

export default ToggleImage