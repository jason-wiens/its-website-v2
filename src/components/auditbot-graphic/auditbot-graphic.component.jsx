import React, {useState} from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import { Waypoint } from 'react-waypoint'

import useWindowSize from '../../hooks/useWindowSize'

import './auditbot-graphic.styles.scss'

const AuditbotGraphic = () => {
  const [timeline, setTimeline] = useState(0)
  const [stop, repeat] = useState(false)
  const [loop, setLoop] = useState(false)
  const { width } = useWindowSize()

  const handleOnRest = () => {
    if(loop) {
      repeat(!stop)
    }
  }

  const startLoop = () => {
    setTimeline(10)
    setLoop(true)
  }

  // const stopLoop = () => {
  //   setTimeline(0)
  //   setLoop(false)
  // }

  const { x, y } = useSpring({
    config: { duration: 10000 },
    loop: true,
    from: {
      x: 0,
      y: 0
    },
    to: {
      x: timeline,
      y: timeline
    },
    onRest: handleOnRest,
    reset: true
    
  })
  console.log(width)
  const crossRange = [0, 0.2, 0.8, 1.4, 2, 2.6, 10]
  let crossOutputX = []
  let crossOutputY = []
  if (width >= 1440) {
    crossOutputX = [50, 50, 370, 60, 410, 225, 225]
    crossOutputY = [20, 20, 180, 360, 425, 575, 575]
  } else {
    crossOutputX = [25, 25, 250, 50, 250, 140, 140]
    crossOutputY = [10, 10, 85, 210, 250, 350, 350]
  }

  const good = {
    'background-color': x.interpolate({
      range: [0, 3.1, 3.4, 10],
      output: ['#FFFFFF', '#FFFFFF', '#3ffa2a', '#3ffa2a']
    }).interpolate(x => x),
    'border-radius': '4px'
  }

  const bad = {
    'background-color': x.interpolate({
      range: [0, 3.1, 3.4, 10],
      output: ['white', 'white', 'red', 'red']
    }).interpolate(x => x),
    'border-radius': '4px'
  }

  const showValidation = {
    'transform': x.interpolate({
      range: [0, 3.6, 3.8, 3.9, 10],
      output: [0, 0, 2, 1.5, 1.5]
    }).interpolate(x => `scale(${x})`)
  }

   

  return (
   
    <div className='auditbot-graphic'>
      <Waypoint
        scrollableAncestor={window}
        onEnter={startLoop}
        bottomOffset='50%'
        topOffset='-1000%'
      />
      <div className="back-page" />
      <div className="front-page-container">
        <animated.div 
          className="cross"
          style={{
            transform: interpolate(
              [
                x.interpolate({
                  range: crossRange,
                  output: crossOutputX
                }),
                y.interpolate({
                  range: crossRange,
                  output: crossOutputY
                })
              ],
              (x, y) => `translate3d(${x}px, ${y}px, 0)`
            ),
            opacity: x.interpolate({
              range: [0, 0.2, 2.6, 2.8, 10],
              output: [0, 1, 1, 0, 0]
            }).interpolate(x => x)
          }}
        >
          <i class={`fas ${(width < 1440) ? 'fa-2x' : 'fa-3x'} fa-crosshairs`}></i>
        </animated.div>
        <animated.div 
          className="corners"
          style={{
            transform: x.interpolate({
              range: [0, 2.8, 3.1, 3.4, 10],
              output: [1.1, 1.1, 1, 1.1, 1.1]
            }).interpolate(x => `scale(${x})`)
          }}
        >
          <div className="left-top corner" />
          <div className="right-top corner" />
          <div className="left-bottom corner" />
          <div className="right-bottom corner" />
        </animated.div>
        <div className="invoice">
          <animated.div 
            className="inv-content"
            style={{
              opacity: x.interpolate({
                range: [0, 2.8, 3.1, 3.4, 10],
                output: [1, 1, 0, 1, 1]
              }).interpolate(x => x)
            }}
          >
            <animated.i className="wrong-uwi far fa-times-circle" style={showValidation} />
            <animated.i className="wrong-admin far fa-times-circle" style={showValidation} />
            <animated.i className="good-1 far fa-check-circle" style={showValidation} />
            <animated.i className="good-2 far fa-check-circle" style={showValidation} />
            <animated.i className="good-3 far fa-check-circle" style={showValidation} />
            <animated.i className="good-4 far fa-check-circle" style={showValidation} />
            <div className="top">
              <div className="left">
                <div className="inv-logo">Invoice</div>
                <div className="inv-address">
                  Vendor Services Inc.<br/>
                  123, 456 Somewhere Ave<br/>
                  Calgary, AB T3P 1X1
                </div>
              </div>
              <div className="right">
                <div className="inv-data">
                  Inv#: 1452346<br />
                  PO#:  3404PO7
                </div>
                <div className="inv-uwi"><animated.span style={good}>Location: 100/01-01-001-01W5/00</animated.span></div>
              </div>
            </div>
            <div className="middle">
              <div className="inv-row inv-header">
                <div className="inv-item-description">Item Description</div>
                <div className="inv-qty">Qty</div>
                <div className="inv-unit-cost">$/hr</div>
                <div className="inv-amount">Amount</div>
              </div>
              <div className="inv-row">
                <div className="inv-item-description"><animated.span style={good}>Field Operator - Run #12</animated.span></div>
                <div className="inv-qty"><animated.span style={good}>80</animated.span></div>
                <div className="inv-unit-cost"><animated.span style={good}>$50.00</animated.span></div>
                <div className="inv-amount"><animated.span style={good}>$4,000.00</animated.span></div>
              </div>
              <div className="inv-row">
                <div className="inv-item-description"><animated.span style={bad}>Call Out - 102/02-02-002-02W4/02</animated.span></div>
                <div className="inv-qty">5</div>
                <div className="inv-unit-cost">$100.00</div>
                <div className="inv-amount">$500.00</div>
              </div>
              <div className="inv-row">
                <div className="inv-item-description"><animated.span style={good}>Field Operator - Run #13</animated.span></div>
                <div className="inv-qty"><animated.span style={good}>100</animated.span></div>
                <div className="inv-unit-cost"><animated.span style={good}>$50.00</animated.span></div>
                <div className="inv-amount"><animated.span style={good}>$5,000.00</animated.span></div>
              </div>
              <div className="inv-row">
                <div className="inv-item-description"><animated.span style={bad}>Joint Venture Admin</animated.span></div>
                <div className="inv-qty">40</div>
                <div className="inv-unit-cost">$50.00</div>
                <div className="inv-amount">$2,000.00</div>
              </div>
              <div className="inv-row">
                <div className="inv-item-description"><animated.span style={good}>Field Operator - Run #14</animated.span></div>
                <div className="inv-qty"><animated.span style={good}>80</animated.span></div>
                <div className="inv-unit-cost"><animated.span style={good}>$50.00</animated.span></div>
                <div className="inv-amount"><animated.span style={good}>$4,000.00</animated.span></div>
              </div>
              <div className="inv-row inv-total-row">
                <div className="total">Total</div>
                <div className="total-amt">$15,500.00</div>
              </div>
            </div>
            <div className="bottom">Thank you for your buisness!</div>
          </animated.div>
        </div>
      </div>
      
    </div>
  )
}

export default AuditbotGraphic
