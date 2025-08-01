import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../utils/utils.js'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import axiosInstance from '../utils/axios.js'

const NoteCard = ({note, setNotes}) => {
  const handleDelete = async(e, id) => {
    e.preventDefault();
    if(!window.confirm("Are you sure you want to delete this note?")) return
    try {
      await axiosInstance.delete(`/notes/${note._id}`);
      setNotes((prev) => prev.filter(note=> note._id !== id))
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Error deleting note");
    }
  }

  return (
    <Link
      to={`/notes/${note._id}`}
      className="card bg-gray-800 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-green-400 hover:border-blue-500"
    >
      <div className="card-body">
        <h3 className="card-title text-white">{note.title}</h3>
        <p className="text-gray-300 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-gray-400">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4 text-gray-400" />
            <button
              className="btn btn-ghost btn-xs hover:bg-error/10"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4 text-error" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NoteCard