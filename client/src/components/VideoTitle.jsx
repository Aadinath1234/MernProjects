// import React from 'react';
// import { CiPlay1 } from 'react-icons/ci';
// import { CiCircleInfo } from 'react-icons/ci';


// const VideoTitle = ({ title, overview }) => {
//     return (
//         <div className="w-[vw] aspect-video absolute text-white pt-[18%] p-12">
//             <h1 className='text-3xl font-bold '>{title} </h1>
//             <p className='w-1/3 mt-4'>{overview}</p>
//             <div className="flex mt-8">
//                 <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
//                     <CiPlay1 size="24px" />
//                     <span
//                         className='ml-1'
//                     >Play </span>
//                 </button>

//                 <button className='flex mx-2 items-center px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md'>
//                     <CiCircleInfo size="24px" />
//                     <span
//                         className='ml-1'
//                     >Watch More </span>


//                 </button>



//             </div>








//         </div>





//     )
// }

// export default VideoTitle;







// overlap adjustments : 
// import React from 'react';
// import { CiPlay1 } from 'react-icons/ci';
// import { CiCircleInfo } from 'react-icons/ci';

// const VideoTitle = ({ title, overview }) => {
//     return (
//         <div className="w-full aspect-video absolute text-white pt-[18%] sm:pt-[20%] p-6 sm:p-12 lg:p-16">
//             {/* Title and Overview are hidden for screens below 425px */}
//             <div className="hidden sm:block">
//                 <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight">
//                     {title}
//                 </h1>
//                 <p className="w-full sm:w-2/3 lg:w-1/2 mt-4 text-sm sm:text-base lg:text-lg">
//                     {overview}
//                 </p>
//                 <div className="flex flex-col sm:flex-row mt-6 sm:mt-8 gap-4">
//                     {/* Play Button */}
//                     <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80 w-full sm:w-auto">
//                         <CiPlay1 size="24px" />
//                         <span className="ml-2">Play</span>
//                     </button>

//                     {/* Watch More Button */}
//                     <button className="flex items-center px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md w-full sm:w-auto">
//                         <CiCircleInfo size="24px" />
//                         <span className="ml-2">Watch More</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VideoTitle;






import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { CiCircleInfo } from 'react-icons/ci';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-full aspect-video absolute text-white pt-[18%] sm:pt-[20%] p-6 sm:p-12 lg:p-16">
            {/* Title and Overview are hidden for screens below 425px */}
            <div className="hidden sm:block lg:mt-80">
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight lg:pl-16">
                    {title}
                </h1>
                <p className="w-full sm:w-2/3 lg:w-1/2 mt-4 text-sm sm:text-base lg:text-lg">
                    {overview}
                </p>
                <div className="flex flex-col sm:flex-row mt-6 sm:mt-8 gap-4">
                    {/* Play Button */}
                    <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80 w-full sm:w-auto">
                        <CiPlay1 size="24px" />
                        <span className="ml-2">Play</span>
                    </button>

                    {/* Watch More Button */}
                    <button className="flex items-center px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md w-full sm:w-auto">
                        <CiCircleInfo size="24px" />
                        <span className="ml-2">Watch More</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoTitle;
