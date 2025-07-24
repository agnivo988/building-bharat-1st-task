export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.jpg" alt="Building Bharat" className="h-20 w-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex gap-8">
        <a href="#" className="text-primary font-medium">Home</a>
        <a href="#" className="hover:text-primary">Courses</a>
        <a href="#" className="hover:text-primary">For College</a>
        <a href="#" className="hover:text-primary">Internships</a>
        <a href="#" className="hover:text-primary">Blogs</a>
      </nav>

      {/* Button */}
      <button className="border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition">
        Start Learning
      </button>
    </header>
  );
}
