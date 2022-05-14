import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div class="flex items-center justify-center ">
                <div class="w-16 h-16 border-b-2 border-green-900 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;