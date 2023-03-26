import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import Card from './Card'

const Testimonial = ({ reviews }) => {
    const [index, setIndex] = useState(0);

    const leftShiftHandler = () => {
        index - 1 < 0 ?
            setIndex(reviews.length - 1) :
            setIndex(index - 1);
    }

    const rightShiftHandler = () => {
        index + 1 === reviews.length ?
            setIndex(0) :
            setIndex(index + 1);
    }

    const surpriseHandler = () => {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className='mt-[40px] p-[40px] max-w-[700px] bg-white rounded-md'>
            <Card review={reviews[index]} />

            <div className='flex justify-center text-3xl mt-10 gap-3 text-violet-400 font-bold'>
                <button onClick={leftShiftHandler} className='hover:text-violet-500'>
                    <FiChevronLeft />
                </button>

                <button onClick={rightShiftHandler} className='hover:text-violet-500'>
                    <FiChevronRight />
                </button>
            </div>

            <div className='mt-5'>
                <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
                px-10 py-2 rounded-md font-bold text-white text-lg'>
                    Surprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonial