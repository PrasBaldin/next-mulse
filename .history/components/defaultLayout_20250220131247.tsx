import Navbar from "./navbar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default DefaultLayout