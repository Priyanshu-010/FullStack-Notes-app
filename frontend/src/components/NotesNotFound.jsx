import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="p-6 rounded-full bg-gray-800 border border-gray-700">
        <NotebookIcon className="size-10 text-green-400" />
      </div>
      <h3 className="text-2xl font-bold text-white">No notes yet</h3>
      <p className="text-gray-400">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link 
        to="/create" 
        className="btn bg-gradient-to-r from-green-500 to-blue-600 border-none text-white hover:from-green-600 hover:to-blue-700"
      >
        Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;