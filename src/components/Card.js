import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = ({ review }) => {
    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute -top-[7rem] z-[15]'>
                <img
                    src={review.image}
                    alt="profile"
                    className='w-[140px] h-[140px] rounded-full aspect-square'
                />
            </div>

            <div className='absolute w-[140px] h-[140px] bg-violet-500 rounded-full z-[10] -top-[7.3rem] left-[10px]'></div>

            <div className='mt-7'>
                <p className='text-2xl tracking-[0.05rem] font-bold capitalize'>{review.name}</p>
            </div>

            <div className='mt-[2px]'>
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>

            <div className='text-slate-500 mt-4'>
                {review.text}
            </div>

            <div className='text-violet-400 mx-auto mt-4'>
                <FaQuoteRight />
            </div>



        </div>
    )
}

export default Card