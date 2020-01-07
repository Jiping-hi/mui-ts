import React from 'react'
import SplitPane from 'react-split-pane'
import './react-split-pane-1.css'
// import { Typography } from '@material-ui/core';

interface MyListProps {
  id?: number;
}
const defaultProps: MyListProps = { id: 123 };

export function MyList(props: MyListProps) {
  props = { ...defaultProps, ...props }
  return (
    <div style={{}} className='d-flex flex-column  p-2 bd-highlight'>
      <div style={{height:'20%'}}>mylist</div>
      <div style={{ height: '20%' }}>{props.id}</div>
      <div style={{ height: '60%' }}>
      <SplitPane split="vertical" minSize={150} defaultSize={200} className='flex-fill' style={{position: 'relative'}} >
        <div style={{ padding: 4 }}>
          Disclaimer: localStorage has a variety of performance trade-offs. Browsers such as Firefox have now optimized localStorage use so that they will asynchronously initiate a read of all saved localStorage data for an origin once they know the page will load. If the data has not fully loaded by the time code accesses localStorage, the code will cause the page's main thread to block until the database load completes. When the main thread is blocked, no other JS code will run or layout will occur. In multiprocess browsers and for users with fast disk storage, this will be less of a problem. You are likely to get yelled at if you use localStorage.
        </div>
        <div>
          list-div-2
          
        </div>
      </SplitPane>
      </div>
    </div>
  )
}