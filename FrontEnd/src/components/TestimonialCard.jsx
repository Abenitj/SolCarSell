import React from 'react';

function TestimonialCard() {
    return (
        <div class="space-y-4 max-w-md mx-auto  flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 fill-red-500 flex justify-center " viewBox="0 0 35 30" fill="none">
                <path
                    d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z">
                </path>
            </svg>
            <p class="md:text-lg leading-relaxed text-center ">It's incredibly easy to integrate into our applications, and it has saved us countless hours of development time.</p>
            <div class="flex items-center gap-2 text-center sm:text-left"><img alt="Yifan testimonial for ShipFast" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDB8MXx8fDE2OTYxNzE4MzN8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
                <p>Yifan, <span class="font-bold">John Doe</span></p>
            </div>
        </div>
    )
};

export default TestimonialCard;