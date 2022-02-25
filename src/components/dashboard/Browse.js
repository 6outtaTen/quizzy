import React, { useState } from "react";

export default function Browse() {
  const [resultsAppearing, setResultsAppearing] = useState(false);

  return (
    <>
      <div className="flex flex-col h-[81%] w-[70%] gap-4">
        <div className="text-[50px] mb-[10%] text-special-black text-center">Browse</div>
        
        <div className="bg-special-black flex flex-col basis-[80%] rounded-2xl items-center gap-36">
            <input
                className="h-[16px] w-[55%] mt-[30px] bg-transparent border-b-2 outline-none border-b-special-pink text-white text-center"
                name="browse"
                placeholder="Search for quizzes"
            />

            { !resultsAppearing && <span className="text-special-gray">Results will appear here</span> }

        </div>
      </div>
    </>
  );
}