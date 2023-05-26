import * as React from 'react';

const CategoryMiniCard = ({src,children}) => {
    return (
        <>
            <div className='w-64 p-5 rounded-xl bg-blue-900'>
                <img src={src} className='w-20'/>
                <h3 className='pt-5 text-xl openMedium'>
                    {children}
                </h3>
            </div>
        </>
    );
}
export default CategoryMiniCard