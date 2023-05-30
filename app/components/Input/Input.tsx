'use client'
import clsx from 'clsx'
import { error } from 'console'
import { FieldValues, SubmitHandler, useForm, UseFormRegister, FieldErrors } from 'react-hook-form'

interface InputProps {
  label: string
  name: string
  id: string
  type: string
  required: boolean
  register: UseFormRegister<FieldValues>
  disabled: boolean
  errors: FieldErrors<FieldValues>
}
const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  type,
  register,
  required,
  disabled,
  errors
}) => {
  return (
    <>
      <div>
        <label htmlFor={id} className="block text-base font-bold  text-gray-800">
          {
            label
          }
        </label>
        <div className="mt-2">
          <input
            id={id}
            
            type={type}
            autoComplete="email"
            disabled={disabled}
            placeholder={label}
            required
            {
            ...register(id, {
              required
            })
            }
            className={clsx(
              `
              form-input
              block
              w-full rounded-md
              border-0
              outline-none
              py-3
              text-gray-900
              ring-1
              ring-inset
              bg-gray-100
              ring-gray-300
              placeholder:text-gray-400
              placeholder:text-lg
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              sm:text-sm
              sm:leading-6
              duration-200
              transition-all
              ease-linear
              `,
              errors[id] && 'ring-red-500',
              disabled && 'opacity-50 cursor-default'
            )}
          />
        </div>
      </div>
    </>
  )
}

export default Input