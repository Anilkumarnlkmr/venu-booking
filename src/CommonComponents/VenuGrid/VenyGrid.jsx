import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider'
import {Link} from  'react-router-dom'

export const VenuGrid = (props) => {
    console.log(props)
    return (
        <div class='flex'>
        {props.venues.length && props.venues.map((item)=>
        <Link to={`/venu/${item.id}`}>
            <div class="grid grid-cols-1 px-8" style={{padding:'15px'}}>
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
                    <ImageSlider />
                    <img src="path/to/image1.jpg" alt="Component 1" class="w-full h-48 object-cover object-center" />
                    <div class="p-4">
                        <div class={'flex'}>
                        <h3 class="font-bold text-xs mb-2">{item.name}</h3>
                        <div class="text-yellow-500 text-xs mb-2 flex">
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <p>{item.ratings}</p><p>{'('}</p>{item.totalReviews}<p>{' reviews)'}</p>
                        </div>
                        </div>
                        <div class='flex text-xs'><img src='https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg'/>{item.city}</div>
                        <div class="text-lg font-bold">{item.budget}</div>
                    </div>
                </div>

                {/* <div class="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="path/to/image2.jpg" alt="Component 2" class="w-full h-48 object-cover object-center" />
                    <div class="p-4">
                        <h3 class="font-bold text-xl mb-2">Component 2</h3>
                        <div class="text-yellow-500 mb-2">
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                        </div>
                        <div class="text-lg font-bold">$80</div>
                    </div>
                </div> */}
            </div>
            </Link>)}
            {props.venues.length && props.venues.map((item)=>
            <div class="grid grid-cols-1 px-15">
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="path/to/image1.jpg" alt="Component 1" class="w-full h-48 object-cover object-center" />
                    <div class="p-4">
                        <h3 class="font-bold text-xl mb-2">{item.name}</h3>
                        <div class="text-yellow-500 mb-2">
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                        </div>
                        <div class="text-lg font-bold">{item.budget}</div>
                    </div>
                </div>

                {/* <div class="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="path/to/image2.jpg" alt="Component 2" class="w-full h-48 object-cover object-center" />
                    <div class="p-4">
                        <h3 class="font-bold text-xl mb-2">Component 2</h3>
                        <div class="text-yellow-500 mb-2">
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                            <svg class="w-6 h-6 fill-current inline">
                                <polygon points="10,0 13,7 20,7 14,11 17,18 10,14 3,18 6,11 0,7 7,7" />
                            </svg>
                        </div>
                        <div class="text-lg font-bold">$80</div>
                    </div>
                </div> */}
            </div>)} 
        </div>
    )
}