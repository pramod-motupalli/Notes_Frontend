import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
                setContent("");
                setTitle("");
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white px-4 py-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center text-indigo-400">My Notes</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mb-8">
                    {notes.map((note) => (
                        <Note note={note} onDelete={deleteNote} key={note.id} />
                    ))}
                </div>

                <h2 className="text-2xl font-semibold mb-2 text-gray-300">Create a Note</h2>
                <form
                    onSubmit={createNote}
                    className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700"
                >
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-300">
                            Title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            className="mt-1 block w-full border border-gray-600 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-300">
                            Content:
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            required
                            className="mt-1 block w-full border border-gray-600 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
                            rows="4"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Home;
