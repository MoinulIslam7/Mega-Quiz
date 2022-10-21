import React from 'react';

const Blog = () => {
    return (
        <div className='m-10 p-10 bg-gray-100 text-fuchsia-900'>
            <h2 className='text-3xl'>What is the purpose of react router?</h2>
            <p className='text-left'>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
            By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application</p>
            <br />
            <h2 className='text-3xl'>How does context API works?</h2>
            <p className='text-left'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
            <br />
            <h2 className='text-3xl'>What is useRaf hook?</h2>
            <p className='text-left'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. </p>
        </div>
    );
};

export default Blog;