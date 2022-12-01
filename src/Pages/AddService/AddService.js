import React from 'react';
import toast from 'react-hot-toast';

const AddService = () => {
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const price = form.price.value;
        const description = form.description.value;
        console.log(description, name, price, photoURL);
        const service = {
            service_name: name,
            img: photoURL,
            price: price,
            description: description,
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('added service successfully')
                }
            })
    }
    return (
        <div className="hero py-6 bg-base-200">
            <div className="card w-4/5 lg:w-2/4 shadow-2xl bg-base-100">

                <div className="card-body">
                    <h1 className='text-4xl font-bold text-center text-purple-600'>Add A Service</h1>
                    <form onSubmit={handleAddService}>


                        <div className="form-control">
                            <label className='mb-2'>Service Name</label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered mb-4" required />
                        </div>


                        <div className="form-control">
                            <label className='mb-2'>Photo Url</label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered mb-4" required />
                        </div>

                        <div className="form-control">
                            <label className='mb-2'>Price</label>
                            <input type="number" placeholder="Price" name="price" className="input input-bordered mb-4" required />
                        </div>


                        <div className="form-control">
                            <label className='mb-2'>Description</label>
                            <textarea name="description" className="textarea textarea-bordered w-full my-2" placeholder="write about food..."></textarea>
                        </div>

                        <button type='submit' className='btn btn-primary w-full'>Add Service</button>
                    </form>
                </div>

            </div>
        </div >
    );
};

export default AddService;