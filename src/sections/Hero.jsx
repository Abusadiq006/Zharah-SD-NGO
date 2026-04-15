const hero = () => {
    return(
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Empowering Young Women <br/> 
        For A Better Future
      </h1>

             <p className="max-w-2xl text-gray-600 mb-8">
        Zharah SD Initiative Foundation is dedicated to improving the lives of young women 
        through education, hygiene awareness, healthcare support, and skill development 
        programs that create lasting impact.
      </p>


            <div className="flex gap-4">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
          Donate Now
        </button>

        <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg">
          Learn More
        </button>
      </div>

        </section>
    )
}

export default hero