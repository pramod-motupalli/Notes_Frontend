import React from 'react';

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString('en-US');

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this note?')) {
            onDelete(note.id);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 dark:text-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700 transition-all duration-300">
            <p className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3">{note.title}</p>
            <p className="text-gray-800 dark:text-gray-300 mb-3 whitespace-pre-line">{note.content}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{formattedDate}</p>
            <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-sm transition duration-300"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default Note;
