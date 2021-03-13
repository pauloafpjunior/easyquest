import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import InlineEditor from 'ckeditor5-build-inline-with-base64-upload';
import './text.css';

export default ({ value, setValue, className }) => {
  const [id, setId] = useState('');
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    if (!id) {
      const x = uuid().replace(/[0-9]/g, 'x');
      setId(x);
    } else if (id && !editor) {
      console.log('asdasd');
      InlineEditor.create(document.querySelector(`#${id}`), {
        initialData: value ?? '',
      })
        .then((newEditor) => {
          newEditor.model.document.on('change:data', () => setValue(newEditor.getData()));
          setEditor(newEditor);
        })
        .catch((err) => {
          console.error(err.stack);
        });
    }
  }, [id, editor]);

  return <div id={id} style={{ width: '600px', border: '1px solid black', marginTop: '40px' }} />;
};
