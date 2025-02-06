import React from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '../organisms/EmblaMoviesArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaMovies = (props) => {
    const { title, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

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
                    <div className='text-gray-400/50'>{title}</div>
                    <div className="items-center flex gap-3">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="gap-3 flex pl-3">
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default EmblaMovies
