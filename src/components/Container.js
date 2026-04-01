export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`}>
      {children}
    </div>
  );
}

