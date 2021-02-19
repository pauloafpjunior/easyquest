import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Grid } from '@material-ui/core';

export default ({ value, setValue, className }) => (
  <Grid className={className}>
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        setValue(editor.getData().trim());
      }}
    />
  </Grid>
);
