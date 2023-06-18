const Stats = () => {
    const stats = [
        {
            id: 1,
            title: "4102+",
            description: "Happy Customer"
        },
        {
            id: 2,
            title: "$552101+",
            description: "Revenew Generated"
        },
        {
            id: 3,
            title: "$4221+",
            description: "Money Back"
        }
    ]
    return (
        <section className="pt-28">
            <div className="max-w-screen-md mx-auto px-4">
                <div className="grid sm:grid-cols-3 gap-4  bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
                    {/* divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-purple-50 */}
                    {
                        stats.map((stat) => (
                            <div key={stat.id}
                                className="flex flex-col items-center justify-center p-6 hover:bg-gray-100 rounded-t-lg">
                                <h3 className="text-purple-500 text-xl font-semibold">{stat.title}</h3>
                                <p className="text-sm text-gray-500">{stat.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Stats;