import React from 'react';

export default function Icon(props) {
  return (
    <span data-feather={props.children}/>
  );
}