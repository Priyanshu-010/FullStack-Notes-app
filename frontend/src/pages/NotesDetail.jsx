import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../utils/axios.js'
import toast from 'react-hot-toast'
import {ArrowLeftIcon, Trash2Icon} from 'lucide-react'

const NotesDetail = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    const fetchNotes = async()=>{
      try {
        const res = await axiosInstance.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetchNotes", error);
        toast.error("Error fetching note");
      }finally{
        setLoading(false);
      }
    }
    fetchNotes();
  }, [])

  const handleDelete = async()=>{
    if(!window.confirm("Are you sure you want to delete this note?")) return
    try {
      await axiosInstance.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate("/");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Error deleting note");
    }
  };

  const handleSave = async ()=>{
     if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);

    try {
      await axiosInstance.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error in handleSave", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="loading loading-spinner text-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost text-gray-300 hover:text-white">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button 
              onClick={handleDelete} 
              className="btn btn-error btn-outline hover:bg-error/10"
            >
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>

          <div className="card bg-gray-800 border border-gray-700">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-gray-300">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered bg-gray-700 text-white border-gray-600"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-gray-300">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered bg-gray-700 text-white border-gray-600 h-32"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
              </div>

              <div className="card-actions justify-end">
                <button 
                  className="btn bg-gradient-to-r from-green-500 to-blue-600 border-none text-white hover:from-green-600 hover:to-blue-700"
                  disabled={saving} 
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotesDetail