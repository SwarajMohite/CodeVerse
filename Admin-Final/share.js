// Initialize Supabase client
const supabaseUrl = 'YOUR_SUPABASE_URL'; // Replace with your Supabase URL
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your Supabase Anon key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Get references to HTML elements
const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');
const uploaderName = document.getElementById('uploaderName');
const status = document.getElementById('status');

// Handle file upload
uploadBtn.addEventListener('click', async () => {
    const files = fileInput.files;
    const name = uploaderName.value.trim();

    if (!files.length) {
        status.textContent = 'Please select files to upload.';
        return;
    }

    if (!name) {
        status.textContent = 'Please enter your name.';
        return;
    }

    status.textContent = 'Uploading...';

    // Loop through files and upload each one
    for (let file of files) {
        try {
            const filePath = `${name}/${file.name}`; // Customize the file path

            // Upload file to Supabase Storage (ensure this bucket is public)
            const { data, error } = await supabase
                .storage
                .from('uploads') // Your Supabase storage bucket
                .upload(filePath, file);

            if (error) {
                throw error;
            }

            // Save file metadata to the database (mark as approved)
            const { error: dbError } = await supabase
                .from('approved_files') // Your metadata table in the database
                .insert([
                    {
                        file_name: file.name,
                        file_path: data.Key,  // File path in the Supabase Storage
                        uploader_name: name,
                        approved: true,  // Mark the file as approved
                        file_url: supabase.storage.from('uploads').getPublicUrl(filePath).publicURL, // Public URL of the file
                    }
                ]);

            if (dbError) {
                throw dbError;
            }

            // Update status after successful upload
            status.textContent = `File "${file.name}" uploaded successfully!`;
        } catch (error) {
            status.textContent = `Error uploading file: ${error.message}`;
            console.error(error);
        }
    }
});
