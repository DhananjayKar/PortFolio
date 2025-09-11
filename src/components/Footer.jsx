export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-[rgba(0,0,0,0.3)] backdrop-blur-lg text-gray-300 px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-2">
        <p className="text-sm">&copy; Dhananjay Kar. All rights reserved. {new Date().getFullYear()}</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm hover:scale-110"
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
}
