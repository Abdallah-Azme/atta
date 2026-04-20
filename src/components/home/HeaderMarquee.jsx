'use client'
import Marquee from '../ui/marquee';
export default function HeaderMarquee({data}) { // Defining the main functional component named 'Footer'.
    const ReviewCard = ({
        title,
    }) => {
        return (
            <div className="part-cont" >
                <h2>{title}</h2>
                <div className="fasel"></div>
            </div>
        );
    };
    return (
        <section className='header-marquee'>
            <div className="marq" style={{ direction: 'ltr' }}>
                <Marquee pauseOnHover reverse className="[--duration:50s]">
                    {data?.newsTicker?.map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
