import React, { useCallback, useEffect, useState } from 'react'
import { IoArrowBack, IoArrowForward } from "react-icons/io5";


export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="bg-gray-900 w-12 h-12 flex items-center justify-center text-xl rounded-lg text-white"
      type="button"
      {...restProps}
    >
      <IoArrowBack />
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="bg-gray-900 w-12 h-12 flex items-center justify-center text-xl rounded-lg text-white"
      type="button"
      {...restProps}
    >
      <IoArrowForward />
    </button>
  )
}
