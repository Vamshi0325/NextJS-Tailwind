import "./globals.css";

export const metadata = {
  title: "NextJS Tailwind",
  description: "NextJS Tailwind Tutorial for Beginners",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
