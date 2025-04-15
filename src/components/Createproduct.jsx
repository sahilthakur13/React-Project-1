import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { productContext } from '../utils/context';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const Createproduct = () => {
  const [products, setProducts] = useContext(productContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const createdProduct = { id: nanoid(),...data,};

    const updatedProducts = [...products, createdProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    toast.success('Product created');
    navigate('/');
  };

  return (
    <div className="h-screen w-full p-4 flex justify-center flex-col items-center">
      <Link to="/">Home</Link>
      <h1 className="text-2xl text-white mb-4">Create Products</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-2/5 text-zinc-300"
      >
        <label>Image URL</label>
        <input
          type="url"
          placeholder="Product Image"
          className="px-3 mb-2 text-base bg-zinc-600 py-1"
          {...register('image', {
            required: 'Image URL is required',
            minLength: {
              value: 4,
              message: 'Image URL must be at least 4 characters',
            },
          })}
        />
        {errors.image && <p className="text-red-400">{errors.image.message}</p>}

        <label>Title</label>
        <input
          type="text"
          placeholder="Product Title"
          className="px-3 mb-2 text-base bg-zinc-600 py-1"
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 4,
              message: 'Title must be at least 4 characters',
            },
          })}
        />
        {errors.title && <p className="text-red-400">{errors.title.message}</p>}

        <label>Price</label>
        <input
          type="number"
          placeholder="Product Price"
          className="px-3 mb-2 text-base bg-zinc-600 py-1"
          {...register('price', {
            required: 'Price is required',
            min: {
              value: 1,
              message: 'Price must be greater than 0',
            },
          })}
        />
        {errors.price && <p className="text-red-400">{errors.price.message}</p>}

        <label>Category</label>
        <input
          type="text"
          placeholder="Product Category"
          className="px-3 mb-2 text-base bg-zinc-600 py-1"
          {...register('category', {
            required: 'Category is required',
            minLength: {
              value: 4,
              message: 'Category must be at least 4 characters',
            },
          })}
        />
        {errors.category && <p className="text-red-400">{errors.category.message}</p>}

        <label>Description</label>
        <textarea
          placeholder="Enter Product Description"
          className="rounded p-2 text-zinc-300 bg-zinc-600 mb-2"
          {...register('description', {
            required: 'Description is required',
            minLength: {
              value: 4,
              message: 'Description must be at least 4 characters',
            },
          })}
        />
        {errors.description && (
          <p className="text-red-400">{errors.description.message}</p>
        )}

        <span className="my-3">
          <button className="bg-green-600 px-3 py-1 rounded text-white">
            Create Product
          </button>
        </span>
      </form>
    </div>
  );
};

export default Createproduct;
