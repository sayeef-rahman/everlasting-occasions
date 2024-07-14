import React, { useState } from "react";
import { ExperienceContent, TabData } from "./experience.types";
import { FaArrowRight } from "react-icons/fa6";
import { AllTabs } from "./data";

const Content = ({ title, description }: ExperienceContent) => (
  <div className="mt-6">
    <h1 className="text-3xl mb-2 font-serif">{title}</h1>
    <p className="text-lg">{description}</p>
    <div className="mt-4">
      <button className="btn btn-md border-none text-white bg-[#C15627] hover:bg-[#E8672F] gap-2 rounded-full flex ">
        LEARN MORE
        <span className="text-xl">
          <FaArrowRight />
        </span>
      </button>
    </div>
  </div>
);

export const Experience: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabData | null>(AllTabs[1]);

  const handleTabChange = (tabData: TabData) => {
    setSelectedTab(tabData);
  };

  return (
    <div className="container mx-auto flex items-center gap-32 py-20">
      <div className="w-1/2">
        <img
          className="w-full h-[700px] rounded-t-full object-cover"
          src={selectedTab?.img}
          alt=""
        />
      </div>

      <div className="w-1/2">
        <h1 className="font-serif text-7xl mb-6 leading-normal">
          Making Every
          <br /> Experience
          <br /> Magical
        </h1>
        <div className="">
          <div className="flex items-center">
            {AllTabs?.map((tab) => (
              <button
                key={tab?.id}
                className={`btn rounded-full border-none text-xl py-2 mb-4 text-black me-4 ${
                  selectedTab?.id === tab.id
                    ? "text-white bg-orange-700"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab?.tabName}
              </button>
            ))}
          </div>
          <div>
            {selectedTab && (
                <Content
                  title={selectedTab?.title}
                  description={selectedTab?.description}
                />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
