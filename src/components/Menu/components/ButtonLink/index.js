/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function ButtonLink(props) {
  // props => {className: "o que passar", href: "" }
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
