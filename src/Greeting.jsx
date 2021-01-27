import React from 'react';
import moment from 'moment';

const getCurrentAge = date => moment().diff(date, 'year')
console.log(moment());
console.log(getCurrentAge(new Date(2001, 11, 1)));
const Greeting = (props) => (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${getCurrentAge(props.birthDate)} years old`}
    </div>
  )

export default Greeting;
