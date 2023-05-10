import * as React from 'react';

export default function ShowCategories({categories}) {
    console.log(categories);
    let categoriesA,ctrl=true;

    for (const category in categories) {
        if(ctrl)categoriesA.push("bg-gray-600");
        else categoriesA.push("bg-gray-300");
    }
        <section
        className='p-1 bg-opacity-50 bg-gray-600 border-gray-800' 
        >
        </section>

    return (
        <div className="flex flex-no-wrap mt-24 w-full h-auto">
            {categoriesA}
        </div>
    );
}
