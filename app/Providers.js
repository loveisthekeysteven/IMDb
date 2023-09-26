"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-trueGray-900 dark:text-trueGray-50 text-bg-trueGray-900 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
