'use client'
import Input from "@/app/components/Input/Input";
import { useCallback, useState } from "react";
import {AiFillFacebook} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import {motion} from "framer-motion";
import Button from "@/app/components/Button";
import clsx from "clsx";
type Variant = 'LOGIN' | 'REGISTER';
const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleVariant = useCallback(() => {
        setVariant(variant === 'LOGIN' ? 'REGISTER' : 'LOGIN');
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if (variant === 'LOGIN') {
            // login
        }
        else {
            // register
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);
        if (action === 'GOOGLE') {
            // google
        }
        else {
            // facebook
        }
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <motion.div 
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.2}}
            className=" bg-white px-4 py-8 drop-shadow-2xl sm:rounded-lg sm:px-10">
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {
                        variant === 'REGISTER' && (
                            <Input errors={errors} id="name" label="Name" register={register} />
                        )
                    }
                    <Input errors={errors} type="email" id="Email" label="Email Address" register={register} />
                    <Input errors={errors} type="password" id="password" label="Password" register={register} />
                    <div>
                        <Button
                        type="submit"
                        fullWidth
                        disabled={isLoading}
                        >
                            {
                                variant === 'LOGIN' ? 'Login' : 'Register'
                            }
                        </Button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-3 text-sm">
                            <p className="font-medium text-gray-900">
                                {
                                    variant === 'LOGIN' ? 'Don\'t have an account?' : 'Already have an account?'
                                }

                            </p>
                            <button
                            disabled={isLoading}
                                type="button"
                                onClick={toggleVariant}
                                className="font-medium text-blue-500 hover:text-blue-600"
                            >
                                {
                                    variant === 'LOGIN' ? 'Register' : 'Login'
                                }
                            </button>
                        </div>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 text-gray-500 bg-white">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-6">
                        <div>
                            <Button
                            disabled={isLoading}
                                fullWidth
                                secondary
                                onClick={() => socialAction('GOOGLE')}
                            >
                                <FcGoogle className="inline-block mr-2 w-6 h-6" />
                                <span className="text-lg">
                                Google
                                </span>
                            </Button>
                        </div>
                        <div>
                            <Button
                            disabled={isLoading}
                                fullWidth
                                secondary
                                onClick={() => socialAction('FACEBOOK')}
                            >
                                <AiFillFacebook className="inline-block mr-2 w-6 h-6" />
                                <span className="text-lg">
                                Facebook
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default AuthForm;