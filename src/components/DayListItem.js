import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {

  const dayClass = classNames("day-list__item", {
    "--selected": props.selected,
    "--full": props.spots === 0
  });

  const formatSpots = (props) => {
    let final = '';
    if (props.spots > 1){
      final = props.spots + ' spots remaining'
    } else if (props.spots) {
      final = props.spots + ' spot remaining'
    } else {
      final = 'no spots remaining'
    }
    return final
  };

  formatSpots(props)

  return (
    <li onClick={() => props.setDay(props.name)} className={ dayClass }>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props)}</h3>
    </li>
  );
}


// export default function DayListItem(props) {

//   const dayPlan = classNames('text', {

//     "text--unselected": props.unselected,
//     "text--selected": props.selected,
//     "text--full": props.full,
//     "text--clickable": props.clickable

//   });

  // const whatDay = classNames(props, {
  //   "Monday": props.monday,
  //   "Tuesday": props.tuesday,
  //   "Wednesday": props.wednesday,
  //   "Thursday": props.thursday,
  //   "Friday": props.friday,
  //   "Saturday": props.saturday,
  //   "Sunday": props.sunday
  // })

//   return (
//     <li>
//       <h2 className={ dayPlan }>{ whatDay }</h2> 
//       <h3 className={ dayPlan }>{ props.spots }</h3>
//       <button onClick={ whatDay }>Select day of the week</button>
//       <p></p>
//     </li>
//   );
// }

// The <li> represents the entire day item
// The <h2> should display the day name
// The <h3> should display the spots remaining for a day