/*const SUPABASE_URL = "https://bbhazmaaizxsxdqhfwbv.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiaGF6bWFhaXp4c3hkcWhmd2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyODYxODEsImV4cCI6MjA1NTg2MjE4MX0.WUgySgvT9fGTcjYEnQzfM7IYzAFPmBwc3WF3WBE28-M";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function fetchPendingNotes() {
    const { data, error } = await supabase
        .from("notes")
        .select("*")
        .eq("approved", false);  // Fetch notes where approved = false

    if (error) {
        console.error("Error fetching notes:", error);
        return;
    }

    const notesList = document.getElementById("pendingNotes");
    notesList.innerHTML = "";  // Clear previous list

    data.forEach(note => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${note.filename} 
            <button onclick="approveNote(${note.id})">Approve</button>
            <button onclick="deleteNote(${note.id})">Delete</button>
        `;
        notesList.appendChild(listItem);
    });
}

async function approveNote(noteId) {
    const { error } = await supabase
        .from("notes")
        .update({ approved: true })  // Mark note as approved
        .eq("id", noteId);

    if (error) {
        console.error("Error approving note:", error);
    } else {
        fetchPendingNotes();  // Refresh list
    }
}

async function deleteNote(noteId) {
    const { error } = await supabase
        .from("notes")
        .delete()
        .eq("id", noteId);

    if (error) {
        console.error("Error deleting note:", error);
    } else {
        fetchPendingNotes();  // Refresh list
    }
}

fetchPendingNotes(); // Load pending notes when page opens */
