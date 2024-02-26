import React from 'react'

const InjuryTag = ({ title }) => {
    return <div className={`px-3 font-medium py-1 rounded-md w-fit bg-gray-300 text-gray-600 text-xs`}>
        {title}
    </div>
}

export default InjuryTag