/*console.log("Admin script loaded!");

// ✅ Initialize Supabase Client
let supabaseInstance = null;

function getSupabaseClient() {
    if (!supabaseInstance) {
        supabaseInstance = supabase.createClient("https://bbhazmaaizxsxdqhfwbv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiaGF6bWFhaXp4c3hkcWhmd2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyODYxODEsImV4cCI6MjA1NTg2MjE4MX0.WUgySgvT9fGTcjYEnQzfM7IYzAFPmBwc3WF3WBE28-M");
    }
    return supabaseInstance;
}

// ✅ Run only when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded!");
    console.log("Checking if #pendingFiles exists:", document.getElementById("pendingFiles"));

    if (document.getElementById("uploadBtn")) {
        document.getElementById("uploadBtn").addEventListener("click", uploadFile);
    }

    if (document.getElementById("pendingFiles")) {
        loadPendingFiles();
    }

    if (document.getElementById("approvedFiles")) {
        loadApprovedFiles();
    }
});

// ✅ Upload File
async function uploadFile() {
    const supabase = getSupabaseClient();
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file!");
        return;
    }

    const filePath = `uploads/${Date.now()}_${file.name}`;
    console.log("Uploading file:", filePath);

    // Upload to Supabase Storage
    const { error } = await supabase.storage.from("notes-uploads").upload(filePath, file);

    if (error) {
        alert("Upload failed!");
        console.error("Storage Upload Error:", error);
        return;
    }

    // ✅ Get Public URL
    const fileUrl = `https://bbhazmaaizxsxdqhfwbv.supabase.co/storage/v1/object/public/notes-uploads/${filePath}`;
    console.log("Public URL:", fileUrl);


    // ✅ Insert into Database
    const { error: insertError } = await supabase.from("notes").insert([
        { file_name: file.name, file_url: fileUrl, approved_files: false }
    ]);

    if (insertError) {
        alert("Database entry failed!");
        console.error("Database Insert Error:", insertError);
        return;
    }

    alert("Upload successful! Waiting for admin approval.");
}

// ✅ Load Pending Files for Admin
async function loadPendingFiles() {
    const supabase = getSupabaseClient();
    console.log("🟡 Fetching pending files...");  // Debugging

    const { data, error } = await supabase.from("notes").select("*").eq("approved", false);

    if (error) {
        console.error("Error fetching pending files:", error);
        return;
    }

    console.log("✅ Fetched Pending Files:", data);  // 🔍 Debugging log

    const pendingFilesDiv = document.getElementById("pendingFiles");
    if (!pendingFilesDiv) {
        console.error("❌ Element #pendingFiles not found in DOM.");
        return;
    }

    pendingFilesDiv.innerHTML = "";

    if (data.length === 0) {
        pendingFilesDiv.innerHTML = "<p>No pending files.</p>";
        return;
    }

    data.forEach(file => {
        const fileElement = document.createElement("div");
        fileElement.innerHTML = `
            <p>${file.file_name}</p>
            <a href="${file.file_url}" target="_blank">View File</a>
            <button onclick="approveFile('${file.id}')">Approve</button>
            <button onclick="rejectFile('${file.id}')">Reject</button>
        `;
        pendingFilesDiv.appendChild(fileElement);
    });
}

// ✅ Approve File
async function approveFile(fileId) {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from("notes").update({ approved: true }).eq("id", fileId);

    if (error) {
        alert("Approval failed!");
        console.error("Approval Error:", error);
        return;
    }

    alert("File approved!");
    loadPendingFiles();
}

// ✅ Reject File
async function rejectFile(fileId) {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from("notes").delete().eq("id", fileId);

    if (error) {
        alert("Rejection failed!");
        console.error("Rejection Error:", error);
        return;
    }

    alert("File rejected!");
    loadPendingFiles();
}

// ✅ Load Approved Files for Library
async function loadApprovedFiles() {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.from("notes").select("*").eq("approved", true);

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
        fileElement.innerHTML = `<a href="${file.file_url}" target="_blank">${file.file_name}</a>`;
        approvedFilesDiv.appendChild(fileElement);
    });
}    */

    // Initialize Supabase Client
let supabaseInstance = null;

function getSupabaseClient() {
    if (!supabaseInstance) {
        supabaseInstance = supabase.createClient("https://bbhazmaaizxsxdqhfwbv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiaGF6bWFhaXp4c3hkcWhmd2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyODYxODEsImV4cCI6MjA1NTg2MjE4MX0.WUgySgvT9fGTcjYEnQzfM7IYzAFPmBwc3WF3WBE28-M");
    }
    return supabaseInstance;
}
    console.log("✅ Supabase Initialized");
    
    // ✅ Run only when DOM is loaded
    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM fully loaded!");
    
        if (document.getElementById("uploadBtn")) {
            document.getElementById("uploadBtn").addEventListener("click", uploadFile);
        }
    
        if (document.getElementById("pendingFiles")) {
            loadPendingFiles();
        }
    
        if (document.getElementById("approvedFiles")) {
            loadApprovedFiles();
        }
    });
    
    // ✅ Upload File
    async function uploadFile() {
        const supabase = getSupabaseClient();
        const fileInput = document.getElementById("fileInput");
        const nameInput = document.getElementById("uploaderName"); // New name input field
        const file = fileInput.files[0];
    
        if (!file) {
            alert("Please select a file!");
            return;
        }
        
        if (!nameInput.value.trim()) {
            alert("Please enter your name!");
            return;
        }
    
        const uploaderName = nameInput.value.trim();
        const filePath = `uploads/${Date.now()}_${file.name}`;
        console.log("Uploading file:", filePath);
    
        // Upload to Supabase Storage
        const { error } = await supabase.storage.from("notes-uploads").upload(filePath, file);
    
        if (error) {
            alert("Upload failed!");
            console.error("Storage Upload Error:", error);
            return;
        }
    
        // ✅ Get Public URL
        const fileUrl = `https://bbhazmaaizxsxdqhfwbv.supabase.co/storage/v1/object/public/notes-uploads/${filePath}`;
        console.log("Public URL:", fileUrl);
    
        // ✅ Insert into Database (now includes uploader's name)
        const { error: insertError } = await supabase.from("notes").insert([
            { file_name: file.name, file_url: fileUrl, approved: false, uploader_name: uploaderName }
        ]);
    
        if (insertError) {
            alert("Database entry failed!");
            console.error("Database Insert Error:", insertError);
            return;
        }
    
        alert("Upload successful! Waiting for admin approval.");
    }
    
    
    // ✅ Load Pending Files for Admin
async function loadPendingFiles() {
    const supabase = getSupabaseClient();
    console.log("🟡 Fetching pending files...");

    const { data, error } = await supabase.from("notes").select("*").eq("approved", false);

    if (error) {
        console.error("Error fetching pending files:", error);
        return;
    }

    const pendingFilesDiv = document.getElementById("pendingFiles");
    if (!pendingFilesDiv) {
        console.error("❌ Element #pendingFiles not found in DOM.");
        return;
    }

    pendingFilesDiv.innerHTML = "";

    if (data.length === 0) {
        pendingFilesDiv.innerHTML = "<p>No pending files.</p>";
        return;
    }

    data.forEach(file => {
        const fileElement = document.createElement("div");
        fileElement.innerHTML = `
            <p><strong>Uploader:</strong> ${file.uploader_name}</p>
            <p><strong>File:</strong> ${file.file_name}</p>
            <a href="${file.file_url}" target="_blank">View File</a>
            <button onclick="approveFile('${file.id}')">Approve</button>  <!-- ✅ FIXED -->
            <button onclick="rejectFile('${file.id}')">Reject</button>
        `;
        pendingFilesDiv.appendChild(fileElement);
    });
}

    
    // ✅ Approve File in Supabase
async function approveFile(fileId) {
    const supabase = getSupabaseClient();
    
    const { error } = await supabase
        .from("notes")
        .update({ approved: true }) // ✅ Change approved status to true
        .eq("id", fileId);

    if (error) {
        alert("❌ Approval failed!");
        console.error("Approval Error:", error);
        return;
    }

    alert("✅ File approved successfully!");

    // Refresh the pending and approved files lists
    loadPendingFiles();
    loadApprovedFiles();
}

// ✅ Load Approved Files
async function loadApprovedFiles() {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.from("notes").select("*").eq("approved", true);

    if (error) {
        console.error("Error fetching approved files:", error);
        return;
    }

    const approvedFilesDiv = document.getElementById("approvedFiles");
    if (!approvedFilesDiv) {
        console.error("❌ Element #approvedFiles not found in DOM.");
        return;
    }

    approvedFilesDiv.innerHTML = "";

    if (data.length === 0) {
        approvedFilesDiv.innerHTML = "<p>No approved files available.</p>";
        return;
    }

    data.forEach(file => {
        const fileElement = document.createElement("div");
        fileElement.innerHTML = `
            <p><strong>Uploader:</strong> ${file.uploader_name}</p>
            <a href="${file.file_url}" target="_blank">${file.file_name}</a>
        `;
        approvedFilesDiv.appendChild(fileElement);
    });
}
    
    
    // ✅ Reject File
    async function rejectFile(fileId) {
        const supabase = getSupabaseClient(); // Add this line
        const { error } = await supabase.from("notes").delete().eq("id", fileId);
    
        if (error) {
            alert("Rejection failed!");
            console.error("Rejection Error:", error);
            return;
        }
    
        alert("File rejected!");
        loadPendingFiles();
    }
    