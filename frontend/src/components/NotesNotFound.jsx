import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-md sm:max-w-lg">
      <div className="p-6 sm:p-8 rounded-full bg-gray-800 border border-gray-700">
        <NotebookIcon className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white mt-4 sm:mt-6 text-center">
        No notes yet
      </h3>
      <p className="text-gray-400 text-sm sm:text-base text-center mt-2 sm:mt-3">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link 
        to="/create" 
        className="btn mt-6 sm:mt-8 bg-gradient-to-r from-green-500 to-blue-600 border-none text-white hover:from-green-600 hover:to-blue-700 text-sm sm:text-base"
      >
        Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;