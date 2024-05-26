
import { Star, ChevronDown } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function  Profile  ()  {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">Teacher</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">Ratnangkur Majumder</h1>
    
             
            <p className="leading-relaxed">
            Head of Department-BCA<br/>
            E-mail: ratnankur.majumdar@gmail.com<br/>

            </p>
            <br/>
           
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              ><NavLink to="/addstudent">Edit</NavLink>
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
