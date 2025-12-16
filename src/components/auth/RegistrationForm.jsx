import React from 'react';
import { useForm } from 'react-hook-form';
import Field from '../common/Field';
import axios from 'axios';
import { useNavigate } from 'react-router';

const RegistrationForm = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const submitForm = async (formData) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
                formData
            );

            if (response.status === 201) {
                navigate('/login');
            }
        } catch (error) {
            setError('root.random', {
                type: 'server',
                message:
                    error?.response?.data?.message ||
                    'Something went wrong. Please try again.',
            });
        }
    };

    return (
        <form
            className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
            onSubmit={handleSubmit(submitForm)}
        >
            <Field label="First Name" error={errors.firstName}>
                <input
                    {...register('firstName', { required: 'First Name is required' })}
                    type="text"
                    className={`auth-input ${
                        errors.firstName ? 'border-red-500' : 'border-gray-200'
                    }`}
                />
            </Field>

            <Field label="Last Name" error={errors.lastName}>
                <input
                    {...register('lastName', { required: 'Last Name is required' })}
                    type="text"
                    className={`auth-input ${
                        errors.lastName ? 'border-red-500' : 'border-gray-200'
                    }`}
                />
            </Field>

            <Field label="Email" error={errors.email}>
                <input
                    {...register('email', { required: 'Email ID is required' })}
                    type="email"
                    className={`auth-input ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                />
            </Field>

            <Field label="Password" error={errors.password}>
                <input
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Your password must be at least 8 characters',
                        },
                    })}
                    type="password"
                    className={`auth-input ${
                        errors.password ? 'border-red-500' : 'border-gray-200'
                    }`}
                />
            </Field>

            {errors?.root?.random && (
                <p className="text-red-500 text-sm">
                    {errors.root.random.message}
                </p>
            )}

            <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                type="submit"
            >
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;
