import React from "react";

type imgProps = {
    className?: string,
    src: any,
    width?: any,
    height?: any
}

const Img = (props: imgProps) => {
    return <img src={props.src} height={props.height} width={props.width} alt="not found" data-testid="img"></img>
}

export default Img;