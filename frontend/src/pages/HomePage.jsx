import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import NoteCard from '../components/NoteCard'
import axiosInstance from '../utils/axios'
import NotesNotFound from '../components/NotesNotFound'

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchNotes = async()=>{
      try {
        const res = await axiosInstance.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }finally{
        setLoading(false);
      }
    }
    fetchNotes();
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center py-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Loading notes...
          </div>
        )}

        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage