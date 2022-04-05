import React from 'react';
import BlogAns from './BlogAns/BlogAns';

const Blogs = () => {
    const questionAns = [
        {
            id: 1,
            question: 'What is context API? / What is the purpose of context API',
            Ans: 'Context API provides us to avoid props drilling , it allows us to pass data throw the component tree.When we want to pass data to a child we used props bt in a component tree it is complicated and security is low. In the context API we can pass data throw component tree without prps driling just declaring context in parent componet and reveive in the child where we want, It also ensures the security'
        },
        {
            id: 2,
            question: 'Whai is semantic tag?',
            Ans: 'Semantic tag refers those HTML tag who are not only style in ui also give information what they contains. Semantic tag provide a information what they contains so that brouser or search engine can give users the right information that they searcing.'
        },
        {
            id: 3,
            question: 'Deference between Inline block and Inline block element',
            Ans: 'Inline block behaves as a block element but in line. It uses inline with other element or text but it have the behaviours like block such as "width,heitht" . We can call inline block element to those HTML elements who have the power like Block element but they used inline .'
        }
    ]
    return (
        <div className=' flex flex-wrap justify-center'>
            {
                questionAns.map(ans => <BlogAns
                    ans={ans}
                    key={ans.id}
                ></BlogAns>)
            }
        </div>
    );
};

export default Blogs;