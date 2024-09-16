import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const EditorComponent = () => {
    const [editorData, setEditorData] = useState('');
    const [pageName, setPageName] = useState('');

    const handleSubmit = async () => {
        const apiUrl = 'https://serve.servebiznes.com/api/storepage';
        
        try {
            const response = await axios.post(apiUrl, {
                page_name: pageName,
                page_content: editorData,
            });

            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error posting content:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter page name"
                value={pageName}
                onChange={(e) => setPageName(e.target.value)}
            />
            <CKEditor
                editor={ClassicEditor}
                config={{
                    simpleUpload: {
                        uploadUrl: 'https://your-upload-endpoint.com/upload', // Replace with your image upload endpoint
                        headers: {
                            'X-CSRF-TOKEN': 'CSRF-Token', // Optional: CSRF token if needed
                            Authorization: 'Bearer <JSON Web Token>' // Optional: Bearer token if needed
                        }
                    }
                }}
                data="<p>Start typing your content here...</p>"
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data);
                }}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default EditorComponent;
