import React from 'react'

interface MyListProps {
  id?: number;
}
const defaultProps: MyListProps = { id: 123 };

export function MyList(props: MyListProps) {
  props = { ...defaultProps, ...props }
  return (
    <div>
      <div>mylist</div>
      <div>{props.id}</div>
    </div>
  )
}