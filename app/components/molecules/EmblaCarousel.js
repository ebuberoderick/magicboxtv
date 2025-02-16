"use client"
import React from 'react'
import { DotButton, useDotButton } from '../organisms/EmblaCarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '../organisms/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
    const { title, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="overflow-hidden m-auto space-y-6">
            <div className='max-w-7xl'>
                <div className="flex items-center px-4 justify-between">
                    <div className='text-white font-bold text-xl xl:text-4xl'>{title}</div>
                    {
                        scrollSnaps.length > 1 && (
                            <div className="md:flex hidden items-center gap-3 bg-gray-800/25 p-3 border-2 border-gray-800 rounded-lg">
                                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                                <div className="flex items-center gap-1">
                                    {scrollSnaps.map((_, index) => (
                                        <DotButton
                                            key={index}
                                            onClick={() => onDotButtonClick(index)}
                                            className={`h-1 rounded-md ${index === selectedIndex ? 'w-5 bg-pink' : 'w-3 bg-gray-700'}`}
                                        />
                                    ))}
                                </div>
                                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                            </div>
                        )
                    }

                </div>
            </div>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="gap-5 flex pl-5">
                    {props.children}
                </div>
            </div>
            <div className='flex md:hidden items-center justify-center'>
                <div className="flex items-center bg-gray-700 rounded-full overflow-hidden">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`h-1 rounded-full ${index === selectedIndex ? 'w-5 bg-pink' : 'w-3'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
