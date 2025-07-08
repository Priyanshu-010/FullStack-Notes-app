import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import axiosInstance from '../utils/axios.js'
import Navbar from '../components/Navbar.jsx'

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!title.trim() || !content.trim()){
      toast.error("All fields are required");
      return
    }

    setLoading(true)
    try {
      await axiosInstance.post("/notes", {title, content});
      toast.success("Note created successfully");
      navigate("/");
    } catch (error) {
      console.log("Error in handleSubmit", error);
      toast.error("Error creating note");
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />
      <div className="mx-auto px-4 py-8 sm:py-12 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <Link to={"/"} className="btn btn-ghost text-gray-300 hover:text-white mb-4 sm:mb-6">
          <ArrowLeftIcon className="size-4 sm:size-5" />
          <span className="text-sm sm:text-base">Back to Notes</span>
        </Link>

        <div className="card bg-gray-800 border border-gray-700">
          <div className="card-body p-4 sm:p-6 md:p-8">
            <h2 className="card-title text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Create New Note
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300 text-sm sm:text-base">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note Title"
                  className="input input-bordered bg-gray-700 text-white border-gray-600 text-sm sm:text-base"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300 text-sm sm:text-base">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered bg-gray-700 text-white border-gray-600 h-32 sm:h-40 text-sm sm:text-base"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              <div className="card-actions justify-end">
                <button 
                  type="submit" 
                  className="btn w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-600 border-none text-white hover:from-green-600 hover:to-blue-700 text-sm sm:text-base"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : "Create Note"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage