import AuthForm from "./components/AuthForm";
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
})

export default function Home() {
  return (
    <div
      className={`
        relative
        flex
        min-h-full
        flex-col 
        justify-center
        items-center
        py-12 
        sm:px-6
        lg:px-8
        bg-gray-100
        ${poppins.className}
      `}
    >
       <div className="z-10 sm:mx-auto sm:w-full sm:max-w-md">
        <p className="text-4xl font-extrabold text-white mx-auto w-fit">
          Whis<span className="text-blue-500">per</span>
        </p>
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>
      <div
        className={`
          absolute
          inset-0
         
          bg-[url('https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
          bg-cover
          bg-no-repeat
          bg-center
          bg-blend-darken
          brightness-50
          backdrop-blur-md
        `}
      />
      <AuthForm/>
    </div>
  )
}
