import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import axiosInstance from '../utils/axios.js'

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
      console.log("Error in handleSubmit",error)
      toast.error("Error creating note");
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost text-gray-300 hover:text-white mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-gray-800 border border-gray-700">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Create New Note
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-gray-300">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered bg-gray-700 text-white border-gray-600"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-gray-300">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered bg-gray-700 text-white border-gray-600 h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                  <button 
                    type="submit" 
                    className="btn bg-gradient-to-r from-green-500 to-blue-600 border-none text-white hover:from-green-600 hover:to-blue-700"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage