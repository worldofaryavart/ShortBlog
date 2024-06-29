import MaxWidthWrapper from "./MaxWidthWrapper";
import SearchBox from "./SearchBox";

const Navbar: React.FC = () => {
  

  return (
    <nav className="sticky z-[100] h-17 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 border-b border-zinc-200">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-semibold text-gray-800">
                ShortBlog
              </span>
            </a>
            <SearchBox/>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
