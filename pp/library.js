console.log("Library script loaded!");

// ✅ Initialize Supabase Client
let supabaseInstance = null;

function getSupabaseClient() {
    if (!supabaseInstance) {
        supabaseInstance = supabase.createClient(
            "https://bbhazmaaizxsxdqhfwbv.supabase.co", 
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiaGF6bWFhaXp4c3hkcWhmd2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyODYxODEsImV4cCI6MjA1NTg2MjE4MX0.WUgySgvT9fGTcjYEnQzfM7IYzAFPmBwc3WF3WBE28-M"
        );
    }
    return supabaseInstance;
}

// ✅ Load Approved Files
async function loadApprovedFiles() {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
        .from("notes")
        .select("*")
        .eq("approved", true)
        .order("like_count", { ascending: false });  // Sort by likes in descending order

    if (error) {
        console.error("Error fetching approved files:", error);
        return;
    }

    const approvedFilesDiv = document.getElementById("approvedFiles");
    approvedFilesDiv.innerHTML = "";

    if (data.length === 0) {
        approvedFilesDiv.innerHTML = "<p>No approved files available.</p>";
        return;
    }

    data.forEach(file => {
        const fileElement = document.createElement("div");
        fileElement.classList.add('file-card');
        fileElement.innerHTML = `
            <h3>${file.file_name}</h3>
            <div class="file-info">
                <div><strong>Uploader:</strong> ${file.uploader_name}</div>
                <div><strong>File Name:</strong> ${file.file_name}</div>
                <div class="view-file-btn">
                    <a href="${file.file_url}" target="_blank">View File</a>
                </div>
                <button class="like-btn ${file.liked_by_user ? 'liked' : ''}" data-id="${file.id}">
                    ❤️ ${file.like_count}
                </button>
            </div>
        `;
        approvedFilesDiv.appendChild(fileElement);
    });

    // Attach event listeners to like buttons
    document.querySelectorAll(".like-btn").forEach(btn => {
        btn.addEventListener("click", () => likeFile(btn));
    });
}

// ✅ Handle Like Button Click
async function likeFile(button) {
    const supabase = getSupabaseClient();
    const fileId = button.getAttribute("data-id");

    // Fetch current like count
    let { data, error } = await supabase
        .from("notes")
        .select("like_count")
        .eq("id", fileId)
        .single();

    if (error || !data) {
        console.error("Error fetching like count:", error);
        return;
    }

    let newLikeCount = data.like_count + 1;

    // Update like count in database
    const { error: updateError } = await supabase
        .from("notes")
        .update({ like_count: newLikeCount })
        .eq("id", fileId);

    if (updateError) {
        console.error("Error updating like count:", updateError);
        return;
    }

    // Update button UI
    button.textContent = `❤️ ${newLikeCount}`;
    button.classList.add("liked");
}

// ✅ Search Functionality
document.getElementById("searchInput").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const files = document.getElementById("approvedFiles").children;

    Array.from(files).forEach(file => {
        file.style.display = file.innerText.toLowerCase().includes(searchTerm) ? "" : "none";
    });
});

// ✅ Load files when the page loads
window.onload = function() {
    loadApprovedFiles();  // Wait for the entire page to load, then load the files
};
