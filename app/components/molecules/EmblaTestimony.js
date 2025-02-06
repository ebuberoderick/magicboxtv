import React from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '../organisms/EmblaMoviesArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from '../organisms/EmblaCarouselDotButton'


const EmblaTestimony = (props) => {
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
        <section className="overflow-hidden w-full m-auto space-y-6">
            <div className='max-w-7xl'>
                <div className="flex items-center px-4 justify-between">
                    <div className='text-gray-400/50'>{title}</div>
                </div>
            </div>
            <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="gap-3 flex pl-3">
                    {props.children}
                </div>
            </div>
            <div className="items-center justify-center flex gap-3">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <div className="flex items-center gap-1">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`h-1 rounded-md ${index === selectedIndex ? 'w-5 md:bg-blue bg-pink' : 'w-3 bg-gray-700'}`}
                        />
                    ))}
                </div>
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </section>
    )
}

export default EmblaTestimony
