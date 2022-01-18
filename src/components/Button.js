import React from "react";
import classNames from "classnames";

// import { useState } from "react";
// import { storiesOf } from '@storybook/react'

import "components/Button.scss";
import "components/DayListItem"

// storiesOf('Button')
//    .add('Default Button', () => {})
//    .add()
//    .add()
//    .add()


// export default function Button(props) {
//    const [pressed, setPressed] = useState('Default');
//    const click = () => {setPressed((pressed))}
//    return (
//    <>
//       <button>
//          {pressed}
//       </button>
//    </>);
// }

export default function Button(props) {
   
   const buttonClass = classNames("button", {
      "button--confirm": props.confirm,
      "button--danger": props.danger
    });

   return (
     <button
       className={buttonClass}
       onClick={props.onClick}
       disabled={props.disabled}
     >
       {props.children}
     </button>
   );
 }