import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { StyledSlider as Styled } from './styled'
import { FlexBox, Button } from '@components/atoms'

const Arrows = (props) => {
    const {
        height,
        arrowHandler
    } = props
    return (
        <>
            <FlexBox container height={height} styles={Styled.PrevStyles}>
                <Button className='prev' onClick={() => arrowHandler('prev')}>Prev</Button>
            </FlexBox>
            <FlexBox container height={height} styles={[Styled.PrevStyles, Styled.NextStyles]}>
                <Button className='next' onClick={() => arrowHandler('next')}>Next</Button>
            </FlexBox>
        </>        
    )
}

const Slider = React.forwardRef((props, ref) => {
    const {
        height = '500px',
        images = [],
        duration = 5000,
        dots = false,
        arrow = true,
        infinite = true,
        autoplay = false,
        pauseOnHover = false,
        slidesToShow = 1
    } = props
    let currentIndex = 0
    let intervalId = false
    //If true, add last image to first and first image to last for infinite scrolling
    if(infinite) {
        let firstimg = images[0]
        images.unshift(images[images.length - 1])
        images.push(firstimg)
        currentIndex = 1 //last image is pushed at index 0, so setting currentIndex to 1
    }
    const slider_ref = ref || React.useRef(null)
    const imagesLength = images.length
    const width = `${100 / slidesToShow}%`

    let autoPlayHandler = () => {
        //autoplay always slides in right direction
        arrowHandler('auto')
    }
    let transitionEndHandler =  () => {
        slider_ref.current.style.transitionProperty = 'none'
        //If true, slide reaches last image, resetting current index to 1
        if(currentIndex + 1 >= imagesLength && infinite) {
            currentIndex = 1               
        }
        //If true, slide reaches first image, resetting index to last image
        if(currentIndex - 1 <= -1 && infinite) {
            currentIndex = imagesLength - 2
        }
        infinite ? slider_ref.current.style.transform = `translateX(-${currentIndex * 100}%)` : clear()
    }
    let arrowHandler = (arrowType) => {
        //If prev decrement index, if auto or next increment index
        currentIndex = arrowType === 'prev' ? currentIndex - 1 : currentIndex + 1
        if(currentIndex < imagesLength && currentIndex > -1) {
            slider_ref.current.style.transitionProperty = 'transform'
            slider_ref.current.style.transform = `translateX(-${currentIndex * 100}%)`
        }
        //when arrow buttons are clicked need to reset setinterval to stop autoplay from happening
        if(arrowType !== 'auto' && autoplay) {
            clear()
            intervalId = setInterval(autoPlayHandler, duration)
        }
    }
    let clear = () => {
        clearInterval(intervalId)
        intervalId = false
    }
    
    useEffect(() => {
        document.querySelector('.image-slider').addEventListener('transitionend',transitionEndHandler)
        if(autoplay) {        
            intervalId = setInterval(autoPlayHandler, duration)

            if(pauseOnHover) {
                document.querySelector('.image-slider').addEventListener('mouseover', () => {
                    clear()
                })
                document.querySelector('.image-slider').addEventListener('mouseout', () => {
                    if(!intervalId) {
                        intervalId = setInterval(autoPlayHandler, duration)
                    }
                })
            }
        }
        //remove listeners on unmount
        return () => {
            document.removeEventListener('transitionend', transitionEndHandler)
            clear()
        }
    }, [])

    return(
        <>
            <FlexBox container  ref={slider_ref} className='image-slider' height={height} infinite={infinite} styles={Styled.SliderStyles}
                wrap='nowrap'>
                {
                    images.map((image, index) => (
                        <FlexBox item key={index} width={width} className='slide' styles={Styled.SlideStyles}>
                            <img src={image} style={Styled.ImageStyles}/>
                        </FlexBox>
                    ))
                }
            </FlexBox>
            {
                arrow && (
                    <Arrows height={height} arrowHandler={arrowHandler} />
                )
            }
        </>
    )
})

Slider.propTypes = {
    /**
     * Height of the slider
     */
    height: PropTypes.string,
    /**
     * Images to be shown on slick
     */
    images: PropTypes.array,
    /**
     * Time in ms to show each image, after the duration second slide will be shown
     */
    duration: PropTypes.number,
    /**
     * If true, pagination will be shown.
     */
    dots: PropTypes.bool,
    /**
     * If true, arrow button will be shown.
     */
    arrow: PropTypes.bool,
    /**
     * If true, images will be scrolled infinitely.
     */
    infinite: PropTypes.bool,
    /**
     * If true, slides will autoplay.
     */
    autoplay: PropTypes.bool,
    /**
     * If true, autoscroll will be paused on hover and continued on mouse leave.
     */
    pauseOnHover: PropTypes.bool,
    /**
     * Number of slides to show on each page.
     */
    slidesToShow: PropTypes.number
}

export default Slider
export { Slider }
