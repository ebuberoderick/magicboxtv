
import "./globals.css";

export const metadata = {
  title: "Magicbox TV",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
        className={`bg-gray-950 select-none`}
      >
        {children}
      </body>
    </html>
  );
}
