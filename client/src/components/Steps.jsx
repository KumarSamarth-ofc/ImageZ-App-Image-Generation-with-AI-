import React from 'react'
import { stepsData } from '../assets/assets';

import { delay, motion } from "motion/react";

const Steps = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-32"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-black-700 inline-flex text-3xl sm:text-0xl font-bold text-center bg-white px-28 py-4 rounded-full hover:scale-105 border-neutral-500 transition-all duration-700">
        How AI Magic Works
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Transform Texts Into Stunning Images
      </p>
      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-4  hover:scale-105 hover:shadow-lg hover:border-2 hover:border-gray-500 rounded-[50px] transition-transform duration-300"
          >
            <img width={40} src={item.icon} alt="" />
            <h2 className="ml-4 text-xl font-medium">{item.title}</h2>
            <p className="ml-2 text-orange-500">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Steps
