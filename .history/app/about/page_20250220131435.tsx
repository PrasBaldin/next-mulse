const AboutPage = () => {
    return (
        <>
            <section className="bg-gray-100 dark:bg-gray-700 transition duration-500 ease-in-out py-[10rem]">
                <div className="container">
                    <div className="py-10">
                        <div className="text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out">Ini About</div>
                    </div>
                    <div className="py-10"></div>
                    <div className="py-10"></div>
                    <div className="py-10"></div>
                    <div className="py-10"></div>
                    <div className="py-10"></div>
                </div>
            </section>
        </>
    )
}

AboutPage.getLayout = (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default AboutPage