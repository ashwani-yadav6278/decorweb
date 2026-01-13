import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
import "./globals.css";
export const metadata = {
  title: "Balloonzaa | Balloon Decoration in Faridabad",
  description:
    "Balloonzaa provides birthday, wedding & party balloon decoration services in Faridabad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        
        <CallButton />
        <Footer />
      </body>
    </html>
  );
}
