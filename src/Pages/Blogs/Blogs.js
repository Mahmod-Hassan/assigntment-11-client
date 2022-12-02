import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        <div className='bg-indigo-400 md:w-2/3 mx-auto md:p-10'>
            <Helmet><title>Blogs - Classic Kitchen</title></Helmet>
            <div className='font-bold p-4'>
                <h2 className="text-3xl">What is the difference between sql and nosql?</h2>
                <p className='font-normal text-xl'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className='font-bold p-4'>
                <h2 className="text-3xl">What is JWT, and how does it work?</h2>
                <p className='font-normal text-xl'>JWT full form is JSON WEB TOKEN that is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
            </div>
            <div className='font-bold p-4'>
                <h2 className="text-3xl">What is the difference between javascript and NodeJS?</h2>
                <p className='font-normal text-xl'><span className='text-white'>Javascript</span> is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game development and mobile app development. It is an interpreted scripting language, and the code can only be executed and run in a web browser. We can use Node.js to execute and run the code outside of the browser. It's also known as a browser's language, and it can be used for both client-side and server-side development. Brendan Eich of Netscape created it, and it was first published in 1995. The language was originally known as LiveScript before being renamed JavaScript. JavaScript's syntax is heavily influenced by the programming language C. The extension of JavaScript filename is .js.</p>
                <p className='text-xl font-normal'><span className='text-white'>Node.js </span>is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation. It may run on various platforms including, Windows, Linux, Mac OS, etc. It provides a cross-platform runtime environment with event-driven, non-blocking (asynchronous) I/O for creating highly scalable server-side JavaScript applications.

                    Node.js was developed and introduced by Ryan Dahl in 2009. Node.js can be used to create a variety of applications, including web apps, real-time chat apps, command-line apps, and REST API servers, among others. However, it is mainly used to build network programs such as web servers. The standard filename extension of Node.js is .js.</p>
            </div>
            <div className='font-bold p-4'>
                <h2 className="text-3xl">    How does NodeJS handle multiple requests at the same time ?</h2>
                <p className='font-normal text-xl'>NodeJS receives multiple client requests and places them into EventQueue.NodeJS is built with the concept of event-driven architecture.NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them..</p>
            </div>
        </div>

    );
};

export default Blogs;