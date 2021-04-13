import React, { useState, useEffect } from 'react'

export default function ColorItem({color, index}) {
  const [select,setSelect] = useState(false);
  // 16진수 색상값
  const hexValue = rgb2hex(color.rgb[0], color.rgb[1], color.rgb[2]);

  useEffect(()=> {
    const timeout = setTimeout(() => {
      setSelect(false);
    }, 3000)

    return () => {
      clearTimeout(timeout);
    }
  }, [select])

  return (
    <div
      onClick={() => {
        setSelect(true);
        navigator.clipboard.writeText(hexValue);
      }} 
      className={`color-box ${index > 10 && 'color-light'}`}
      style={{
        backgroundColor: `rgb(${color.rgb[0]},${color.rgb[1]},${color.rgb[2]})`
      }}
    >
      <p className="percent-value">{color.weight}%</p>
      <p>{hexValue}</p>
      {select && <p className='select'>클립보드로 복사</p>}
    </div>
  )
}

function rgb2hex(r,g,b) {
  const rgb = '#' + r.toString(16) + g.toString(16) + b.toString(16); 
  return rgb; 
}