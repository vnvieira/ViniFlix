import React, { Children } from 'react'


function ButtonLink(props) {
//props => { classname:}
    return (

        <a href={props.href} className={props.className}>
          {props.children}
        </a>
            
    )
}
export default ButtonLink