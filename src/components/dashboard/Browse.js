import React, { useState } from "react";

export default function Browse() {
  const [resultsAppearing, setResultsAppearing] = useState(false);

  return (
    <>
      <div className="flex flex-col h-[81%] w-[70%] gap-4">
        <div className="lg:text-[50px] text-[36px] mb-[10%] text-special-black text-center">Browse</div>
        
        <div className="bg-special-black flex flex-col basis-[80%] w-[100%] rounded-2xl items-center gap-36">
            <input
                className="h-[16px] w-[55%] mt-[30px] bg-transparent border-b-2 outline-none border-b-special-pink text-white text-center lg:text-[16px] text-[11px]"
                name="browse"
                placeholder="Search for quizzes"
            />

            { !resultsAppearing && <span className="text-special-gray lg:text-[20px] text-[13.5px]">Results will appear here</span> }

        </div>
      </div>
    </>
  );
}