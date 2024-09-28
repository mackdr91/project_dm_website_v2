import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';
import AuthProvider from "@/components/AuthProvider";


export const metadata = {
    title: '',
    description: '',
    keywords: '',
    description: '',
}
const MainLayout = ({ children }) => {
    return (
        <AuthProvider>
    <html>
        <body className='flex flex-col min-h-screen relative'>
        <Navbar />

            <main className="flex-grow">
                {children}
            </main>

            <Footer />
        </body>
    </html>
        </AuthProvider>
    );
}

export default MainLayout;
