import { styled, View } from 'tamagui'
import React from 'react'
import { COUNT } from '../../utils'

const Button = styled(View, {
  bc: '$yellow5Light',
  p: '$2',
  m: '$1',
  hoverStyle: {
    bc: '$yellow6Light',
  },
  pressStyle: {
    bc: '$yellow7Light',
  },
  focusStyle: {
    bc: '$yellow8Light',
  },
  variants: {
    variant: {
      solid: {
        bc: '$red5Light',
        p: '$2',
        hoverStyle: {
          bc: '$red6Light',
        },
        pressStyle: {
          bc: '$red7Light',
        },
        focusStyle: {
          bc: '$red8Light',
        },
      },
      outlined: {
        borderWidth: '$1',
        borderColor: '$red5Light',
        bc: 'transparent',
        hoverStyle: {
          bc: '$red6Light',
        },
        pressStyle: {
          bc: '$red7Light',
        },
        focusStyle: {
          bc: '$red8Light',
        },
      },
    },
  },
})

const Tamagui = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Button
          key={k}
          variant="solid"
          hoverStyle={{
            bc: '$purple6Light',
          }}
          pressStyle={{
            bc: '$purple7Light',
          }}
          focusStyle={{
            bc: '$purple8Light',
          }}
        />
      ))}
    </>
  )
}

export default Tamagui
