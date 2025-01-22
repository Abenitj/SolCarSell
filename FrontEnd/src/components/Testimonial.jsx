import React from 'react';
import TestimonialCard from './TestimonialCard';

function Testimonial() {
    return (
        <section id="testimonials" aria-label="What our customers are saying" class="bg-slate-50 dark:bg-gray-900 dark:text-primary py-20 sm:py-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto text-center">
                    <h2 class="font-display  font-bold text-4xl tracking-tight sm:text-4xl"> <span className='text-red-500 font-mono'>What Our</span> clients say</h2>
                </div>
                <ul role="list"
                    class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
                    <TestimonialCard></TestimonialCard>
                    <TestimonialCard></TestimonialCard>
                    <TestimonialCard></TestimonialCard>

                </ul>
            </div>
        </section>
    )
}

export default Testimonial;