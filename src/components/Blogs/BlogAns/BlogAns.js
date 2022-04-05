import React from 'react';

const BlogAns = ({ ans }) => {
    const { question, Ans } = ans;
    return (
        <div className='text-left m-6 p-4 w-3/4'>
            <h2 className='text-3xl mb-6 text-orange-400'>{question}</h2>
            <p className='pr-8 text-justify'>{Ans}</p>
        </div>
    );
};

export default BlogAns;