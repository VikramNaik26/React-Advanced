import { useState } from 'react'

const ColorChallenge = () => {
  const [color, setColor] = useState('transparent')
  return (
    <section>
      <div
        style={{
          height: '200px',
          width: '200px',
          marginInline: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: `${color}`,
        }}
      >
        {color === 'transparent' ? 'empty value' : color}
      </div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value)
        }}
      />
    </section>
  )
}
export default ColorChallenge
