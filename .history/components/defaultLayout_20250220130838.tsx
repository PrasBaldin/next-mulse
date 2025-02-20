import Navbar from './Navbar';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
};

export default DefaultLayout