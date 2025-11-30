import { useFetchNotes } from '../hooks/usefetchNotes';
import NoteCard from '../components/NoteCard';

const Notes = () => {
    const { notes } = useFetchNotes();

  return (
    <div className='py-8 px-4 sm:px-6 lg:px-8'> 
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-12 gap-x-20'>
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;