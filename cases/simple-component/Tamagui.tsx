import { styled, View } from 'tamagui'
import React from 'react'
import { COUNT } from '../../utils'

const Box = styled(View, {
  bc: '$yellow5Light',
  p: '$2',
  m: '$1',
})

const Tamagui = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Box key={k} />
      ))}
    </>
  )
}

export default Tamagui
