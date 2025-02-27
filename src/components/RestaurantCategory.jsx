import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({category,showItems,setShowIndex}) => {
    console.log("category",category)
    const handleClick = () => {
        setShowIndex()
    }
    return (

        <div>
          <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between" onClick={handleClick}>
              <span className="font-bold text-lg">
                {category?.title} ({category?.itemCards.length})
              </span>
    
              {/* Font Awesome icon with Tailwind styling */}
              <i className="fas fa-caret-down text-blue-500 hover:text-blue-700 transition-all h-8"></i>
            </div>
            {showItems && <ItemList items={category?.itemCards} />}
          </div>
        </div>
      );
}

export default RestaurantCategory