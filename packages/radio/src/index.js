import React from 'react'
import { Box } from '@oneloop/box'
import { Svg } from '@oneloop/icons'

const RadioBox = ({
  borderColor = '#D4DBDE',
  backgroundColor,
  tick,
  tickColor,
  isMedium,
  ...props
}) => (
  <Svg
    width={isMedium ? 20 : 16}
    height={isMedium ? 20 : 16}
    viewBox={'0 0 ' + isMedium ? 20 : 16 + '' + isMedium ? 20 : 16}
    fill="none"
    {...props}
  >
    <circle
      cx={isMedium ? 10 : 8}
      cy={isMedium ? 10 : 8}
      r={isMedium ? 10 : 8}
      fill={backgroundColor}
    />
    <circle
      cx={isMedium ? 10 : 8}
      cy={isMedium ? 10 : 8}
      r={isMedium ? 9.5 : 7.5}
      stroke={borderColor}
    />
    {tick && (
      <circle
        cx={isMedium ? 10 : 8}
        cy={isMedium ? 10 : 8}
        r={isMedium ? 5 : 4}
        fill={tickColor}
      />
    )}
  </Svg>
)

const RadioChecked = ({ isMedium, ...props }) => (
  <RadioBox
    borderColor="#6A88F2"
    backgroundColor="#6A88F2"
    tick
    tickColor="white"
    isMedium={isMedium}
    {...props}
  />
)

const RadioUnchecked = ({ isMedium, ...props }) => (
  <RadioBox
    borderColor="#D4DBDE"
    backgroundColor="white"
    tick
    tickColor="white"
    isMedium={isMedium}
    {...props}
  />
)

const RadioDisabled = ({ isMedium, ...props }) => (
  <RadioBox
    borderColor="white"
    backgroundColor="white"
    tick
    tickColor="#C1CCD0"
    isMedium={isMedium}
    {...props}
  />
)

const RadioIcon = ({ isMedium, ...props }) => (
  <React.Fragment>
    <RadioChecked
      isMedium={isMedium}
      {...props}
      __css={{
        display: 'none',
        'input:checked:not(:disabled) ~ &': {
          display: 'block',
        },
      }}
    />
    <RadioUnchecked
      isMedium={isMedium}
      {...props}
      __css={{
        display: 'none',
        'input:not(:checked):not(:disabled) ~ &': {
          display: 'block',
        },
      }}
    />
    <RadioDisabled
      isMedium={isMedium}
      {...props}
      __css={{
        display: 'none',
        'input:disabled:not(:checked) ~ &': {
          display: 'block',
        },
      }}
    />
  </React.Fragment>
)

export const Radio = ({
  sx,
  variant = 'radio',
  isMedium = false,
  ...props
}) => (
  <Box
    sx={{
      position: 'relative',
      width: isMedium ? 20 : 16,
      height: isMedium ? 20 : 16,
    }}
  >
    <Box
      as="input"
      type="radio"
      {...props}
      sx={{
        position: 'absolute',
        opacity: 0,
        overflow: 'hidden',
        width: '100%',
        height: '100%',
      }}
    />
    <Box
      as={RadioIcon}
      aria-hidden="true"
      tx="forms"
      variant={variant}
      isMedium={isMedium}
      sx={sx}
      __css={{
        mr: 2,
        borderRadius: 'circle',
        color: 'gray',
        'input:checked ~ &': {
          color: 'primary',
        },
        'input:focus ~ &': {
          boxShadow: 'active',
        },
      }}
    />
  </Box>
)
