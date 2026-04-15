const hero = () => {
    return(
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Empowering Young Women <br/> 
        For A Better Future
      </h1>

             <p className="max-w-xl text-gray-600 mb-6">
                Zharah SD Initiative Foundation is committed to improving lives through
                education, support, and sustainable development.
            </p>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
                Donate Now
            </button>

        </section>
    )
}

export default hero