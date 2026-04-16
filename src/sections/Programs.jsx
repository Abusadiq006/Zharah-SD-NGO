const programs = () => {
    return(
         <section className="py-20 px-6 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold mb-10">
                Our Programs
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 <div className="p-6 shadow rounded-lg">
                    <h3 className="font-bold mb-2">Education</h3>
                    <p className="text-gray-600 text-sm">
                        Providing access to learning opportunities for young women.
                    </p>
                 </div>

                 <div className="p-6 shadow rounded-lg">
                    <h3 className="font-bold mb-2">Hygiene</h3>
                    <p className="text-gray-600 text-sm">
                        Promoting cleanliness and personal health awareness.
                    </p>

                     <div className="p-6 shadow rounded-lg">
                         <h3 className="font-bold mb-2">Healthcare</h3>
                     </div>
                 </div>
            </div>

         </section>

    )
}

export default programs