import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, FormikHelpers } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { updateDocument } from 'src/services/firestoreService';
import { initialValues, DuaSchema } from 'src/utils/validation';
import { addToCollection } from 'src/services/firestoreService';

interface Dua {
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  description: string;
  additionalInfo: string;
}

export default function AddNewDuaForm({ onAdd, editRow, setFetchData, showAddDua }: any) {
  const handleSubmit = async (values: Dua, { resetForm }: FormikHelpers<Dua>) => {
    const { id, ...rest }: any = values;

    if (editRow) {
      const result = await updateDocument('dua_collection', id, rest);
      if (result.success) {
        toast.success('Dua Updated Successfully !', {
          position: 'top-center',
          theme: 'colored',
        });
        setFetchData(true);
      } else {
        toast.error('Unknown Error!', {
          position: 'top-center',
          theme: 'colored',
        });
      }
      showAddDua(false);
    } else {
      const result = await addToCollection('dua_collection', rest);
      if (result.success) {
        toast.success('Dua Added Successfully !', {
          position: 'top-center',
          theme: 'colored',
        });
        resetForm();
        setFetchData(true);
      } else {
        toast.error('Unknown Error!', {
          position: 'top-center',
          theme: 'colored',
        });
      }
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Formik
        initialValues={editRow ? editRow : initialValues}
        validationSchema={DuaSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          isSubmitting,
          setFieldError,
          setFieldTouched,
        }) => {
          const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const fieldName = e.target.name;
            setFieldError(fieldName, undefined);
            handleChange(e);
          };

          return (
            <Form>
              <TextField
                fullWidth
                name="title"
                label="Title"
                value={values.title}
                onChange={handleFieldChange}
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
                margin="normal"
              />

              <TextField
                fullWidth
                name="arabic"
                label="Arabic"
                value={values.arabic}
                onChange={handleFieldChange}
                error={touched.arabic && Boolean(errors.arabic)}
                helperText={touched.arabic && errors.arabic}
                margin="normal"
                inputProps={{ dir: 'rtl', style: { textAlign: 'right' } }}
              />

              <TextField
                fullWidth
                name="transliteration"
                label="Transliteration"
                value={values.transliteration}
                onChange={handleFieldChange}
                error={touched.transliteration && Boolean(errors.transliteration)}
                helperText={touched.transliteration && errors.transliteration}
                margin="normal"
              />

              <TextField
                fullWidth
                name="translation"
                label="Translation"
                value={values.translation}
                onChange={handleFieldChange}
                error={touched.translation && Boolean(errors.translation)}
                helperText={touched.translation && errors.translation}
                margin="normal"
              />

              <TextField
                fullWidth
                name="description"
                label="Description"
                value={values.description}
                onChange={handleFieldChange}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
                margin="normal"
              />

              <TextField
                fullWidth
                name="additionalInfo"
                label="Additional Info"
                value={values.additionalInfo}
                onChange={handleFieldChange}
                error={touched.additionalInfo && Boolean(errors.additionalInfo)}
                helperText={touched.additionalInfo && errors.additionalInfo}
                margin="normal"
                multiline
                rows={4}
                maxRows={10}
                variant="outlined"
              />

              <Button
                size="large"
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                sx={{ mt: 2, background: 'rgb(183, 105, 53)' }}
              >
                {editRow ? 'Update Dua' : 'Add Dua'}
              </Button>
            </Form>
          );
        }}
      </Formik>
      <ToastContainer />
    </Box>
  );
}
