import { MouseEvent, MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { CSSProperties } from "styled-components"

const initialEspectedStyle = {
    HoverStyle: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'red',
    },
    DefaultStyle: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'white',
    },
    DisabledStyle: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'black'
    }

}

export const CircleCheckBtn = ({
    styles = initialEspectedStyle, circleState = false,
    children, onClick = () => {}
    }: {styles?: ICircleStyle, circleState?: boolean,
        children?: ReactNode,  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    }) =>{
    const [hoverState, setHoverState] = useState<boolean>(false);
    let {
        HoverStyle,
        DefaultStyle,
        DisabledStyle,

    } = styles;
    const newDefaultStyle = {...initialEspectedStyle['DefaultStyle'], ...DefaultStyle, };
    const newHoverStyle = {...initialEspectedStyle['HoverStyle'], ...newDefaultStyle, ...HoverStyle,};
    const newDisabledStyle = {...initialEspectedStyle['DisabledStyle'], ...newDefaultStyle, ...DisabledStyle,};
    const styleSelection = () => {
        if (circleState) return newDefaultStyle;
        if (hoverState) return newHoverStyle;
        if(!circleState && !hoverState) return newDisabledStyle
    };
    let selectedStyle = styleSelection();

    return(
        <button
            style={selectedStyle}
            onClick={(event) => onClick(event)}
            onMouseEnter={() =>setHoverState(true)}
            onMouseLeave={() =>setHoverState(false)}
        >
            { children }
        </button>
    )
}

interface ICircleStyle extends CSSProperties{
    HoverStyle?:CSSProperties;
    DefaultStyle?:CSSProperties;
    DisabledStyle?:CSSProperties;
}
