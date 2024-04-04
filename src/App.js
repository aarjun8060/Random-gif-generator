import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background realtive">
      <h1 className="bg-white rounded-lg absolute w-11/12 items-center text-center  px-10 py-2 text-4xl font-bold mx-auto mt-[40px] ml-[45px]">Random GIFs</h1>
      <div className="w-full flex flex-col items-center mt-[120px] gap-y-10">
          <Random />
          <Tag />
      </div>
    </div>
  );
}
