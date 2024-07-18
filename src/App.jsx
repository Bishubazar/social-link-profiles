const links = [
    {
        title: "Github",
        href: "/",
    },
    {
        title: "Frontend Mentor",
        href: "/",
    },
    {
        title: "LinkedIn",
        href: "/",
    },
    {
        title: "Twitter",
        href: "/",
    },
    {
        title: "Instagram",
        href: "/",
    },
];

function App() {
    return (
        <section className="flex items-center justify-center w-screen h-screen bg-x-grey-900">
            {/* Card */}
            <article className="flex flex-col items-center gap-6 p-6 text-center text-white rounded-md sm:p-10 bg-x-grey-800">
                <img
                    src="/images/avatar-jessica.jpeg"
                    alt="avatar"
                    className="w-20 rounded-full aspect-square"
                />
                <div>
                    <h1 className="mb-2 text-2xl font-semibold">
                        Jessica Randall
                    </h1>
                    <h3 className="font-bold text-green">
                        London, United Kingdom
                    </h3>
                </div>
                <p className="">"Front-end developer and avid reader."</p>
                <div className="flex flex-col gap-4 ">
                    {links.map((item) => (
                        <a
                            href={item.href}
                            key={item.title}
                            className="px-24 py-3 font-semibold duration-150 rounded-md hover:text-x-grey-900 hover:bg-green bg-x-grey-700"
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </article>
        </section>
    );
}

export default App;
