import React from 'react'

const Sum = () => {
    const ab = 45;
    const bc = 40;
  return (
    <>
    <h1 data-testid="my-testid">Sum</h1>
    <span title='Sum'>{ab + bc}</span>

    </>
  )
}

export default Sum