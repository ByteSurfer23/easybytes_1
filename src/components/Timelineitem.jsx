import React from "react";
function TimelineItem({year,title,duration,details,position})
{
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
            
            <li className="mb-10 ml-4">
                
                <div className="absolute w-6 h-6 bg-stone-200 rounded-full mt-[-1px] -left-3 border border-white text-[10px] flex items-center justify-center font-bold">{position}</div>
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-90 rounded-md" style={{backgroundColor:'black',color:'white'}}>
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">{title}</h3>
                    <div className="my-1 text-sm font-normal leading-none text-stone-400">{duration}</div>
                </p>
                <p className="my-2 text-base font-normal text-stone-500">{details}</p>
            </li>
        </ol>
    )
}
export default TimelineItem;