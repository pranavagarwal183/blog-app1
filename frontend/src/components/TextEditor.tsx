import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles for react-quill

interface TextEditorProps {
    onChange: (event: { target: { value: string } }) => void;
}

function TextEditor({ onChange }: TextEditorProps) {
    const [editorContent, setEditorContent] = useState<string>("");

    const handleEditorChange = (content: string) => {
        setEditorContent(content);
        onChange({ target: { value: content } });
    };

    return (
        <div className="mt-2">
            <ReactQuill
                value={editorContent}
                onChange={handleEditorChange}
                modules={TextEditor.modules}
                formats={TextEditor.formats}
                placeholder="Write an article..."
            />
        </div>
    );
}

TextEditor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ 'size': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['clean'] 
    ],

    keyboard: {
        bindings: {
            bold: {
                key: 'B',
                shortKey: true, // ctrl/cmd + B
                handler: function(this: any, context: any) {
                    this.quill.format('bold', !context.format.bold);
                }
            },
            italic: {
                key: 'I',
                shortKey: true, // ctrl/cmd + I
                handler: function(this: any, context: any) {
                    this.quill.format('italic', !context.format.italic);
                }
            },
            underline: {
                key: 'U',
                shortKey: true, // ctrl/cmd + U
                handler: function(this: any, context: any) {
                    this.quill.format('underline', !context.format.underline);
                }
            }
        }
    }
};

TextEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'script', 'sub', 'super',
    'color', 'background', 'align',
    'link', 'image', 'video'
];

export default TextEditor;
