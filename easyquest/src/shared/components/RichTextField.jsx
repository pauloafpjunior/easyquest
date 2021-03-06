import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid } from '@material-ui/core';
import InlineEditor from 'ckeditor5-build-inline-with-base64-upload';

export default ({ value, setValue, className }) => {
  const [ctrl, setCtrl] = useState(true);
  const [id, setId] = useState('');
  useEffect(() => {
    if (!id) {
      const x = uuid().replace(/[0-9]/g, 'x');
      setId(x);
    } else if (ctrl && id) {
      setCtrl(false);
      InlineEditor.create(document.querySelector(`#${id}`))
        .then((editor) => {
          window.editor = editor;
          console.log(editor);
        })
        .catch((err) => {
          console.error(err.stack);
        });
    }
  }, [ctrl, id]);

  return <div id={id} style={{ width: '200px' }} />;
};
