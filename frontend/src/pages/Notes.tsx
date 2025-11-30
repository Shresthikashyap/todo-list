import { useState, useMemo } from 'react';
import { useFetchNotes } from '../hooks/usefetchNotes';
import NoteCard from '../components/NoteCard';

const Notes = () => {
    const { notes } = useFetchNotes();
    const [sortBy, setSortBy] = useState('newest');

    const sortedNotes = useMemo(() => {
      const notesCopy = [...notes];
      
      switch(sortBy) {
        case 'newest':
          return notesCopy.sort((a, b) => 
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case 'oldest':
          return notesCopy.sort((a, b) => 
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        case 'alphabetical':
          return notesCopy.sort((a, b) => 
            a.title.localeCompare(b.title)
          );
        case 'reverse-alphabetical':
          return notesCopy.sort((a, b) => 
            b.title.localeCompare(a.title)
          );
        default:
          return notesCopy;
      }
    }, [notes, sortBy]);

  return (
    <div className='py-8 px-4 sm:px-6 lg:px-8'> 
      <div className='max-w-7xl mx-auto'>
        <div className='mb-6 flex justify-end'>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer'
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="alphabetical">A to Z</option>
            <option value="reverse-alphabetical">Z to A</option>
          </select>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-12 gap-x-20'>
          {sortedNotes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
