import React from 'react'
import shaan from '../Assets/Animations/shaan.png';
import {motion} from 'framer-motion';

export default function Team() {
  return (
    <div className="font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-gray-800 text-4xl font-extrabold">Meet our team</h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto justify-center">
                    <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}

                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}

                    className="bg-gray-800 p-4 cursor-pointer border rounded-lg">
                        <img src="https://avatars.githubusercontent.com/u/132995280?v=4" className="w-full object-contain object-top rounded-lg" />

                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">Arman Mondal</h4>
                            <p className="text-xs mt-2 text-white">B.Tech CSE AIML Student</p>
                        </div>
                    </motion.div>

                    <motion.div
                     initial={{ opacity: 0, x: -200 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.1 }}
                     
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                     className="bg-gray-800 p-4 cursor-pointer border rounded-lg">
                        <img src={shaan} className="w-full object-contain object-top rounded-lg" />

                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">Saiyad Musreul</h4>
                            <p className="text-xs mt-2 text-white">B.Tech CSE AIML Student</p>
                        </div>
                    </motion.div>

                   
                </div>
            </div>
        </div>
 
    
  )
}
