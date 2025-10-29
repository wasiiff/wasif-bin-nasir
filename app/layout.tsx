import "./globals.css";



export const metadata = {
  title: "Wasif Bin Nasir",
  description: "Personal Portfolio of Wasif Bin Nasir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
