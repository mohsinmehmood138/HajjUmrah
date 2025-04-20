import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import { Formik, Form, FieldArray, FormikErrors } from 'formik';
import { initialValuesPreUmrah, ChecklistSectionSchema } from 'src/utils/validation';
import { addToCollection, updateDocument } from 'src/services/firestoreService';
import { toast } from 'react-toastify';

interface ChecklistItem {
  id: string;
  text: string;
  description: string;
  selected: boolean;
}

interface ChecklistSectionForm {
  label: string;
  showValue: boolean;
  items: ChecklistItem[];
}

export default function AddChecklistSection({
  setFetchData,
  editItem,
  setEditItem,
  setShowAddItem,
}: any) {
  const handleSubmit = async (values: ChecklistSectionForm, { resetForm, setSubmitting }: any) => {
    const { id, ...rest }: any = values;
    const updatedItems = values.items.map((item, index) => ({
      ...item,
      id: (index + 1).toString(),
    }));
    const addedValues = {
      ...values,
      items: updatedItems,
    };

    if (editItem) {
      setEditItem(null);

      const result = await updateDocument('pre_umrah', id, rest);
      if (result.success) {
        toast.success('pre_umrah Successfully !', {
          position: 'top-center',
          theme: 'colored',
        });
        setShowAddItem(false);
        setFetchData(true);
      } else {
        toast.error('Unknown Error!', {
          position: 'top-center',
          theme: 'colored',
        });
      }
    } else {
      const result = await addToCollection('pre_umrah', addedValues);
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

  const getErrorMessage = (
    errors: FormikErrors<ChecklistSectionForm>,
    touched: any,
    index: number,
    field: keyof ChecklistItem
  ): string => {
    if (
      touched.items &&
      touched.items[index] &&
      touched.items[index][field] &&
      errors.items &&
      Array.isArray(errors.items) &&
      errors.items[index] &&
      typeof errors.items[index] === 'object'
    ) {
      return (errors.items[index] as FormikErrors<ChecklistItem>)[field] as string;
    }
    return '';
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>
        Create Pre Umrah Item
      </Typography>

      <Formik
        initialValues={editItem ? editItem : initialValuesPreUmrah}
        validationSchema={ChecklistSectionSchema}
        onSubmit={handleSubmit}
        validateOnChange
        validateOnBlur
      >
        {({ values, errors, touched, handleChange, isSubmitting }) => (
          <Form>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Section Label"
                name="label"
                value={values.label}
                onChange={handleChange}
                error={touched.label && Boolean(errors.label)}
                helperText={touched.label && (errors.label as string)}
                margin="normal"
              />
            </Box>

            <FieldArray name="items">
              {({ push, remove }) => (
                <Box>
                  {values.items.map((_, index) => {
                    const textError = getErrorMessage(errors, touched, index, 'text');
                    const descriptionError = getErrorMessage(errors, touched, index, 'description');

                    return (
                      <Box
                        key={index}
                        sx={{ mb: 2, border: '1px solid #ccc', p: 2, borderRadius: 2 }}
                      >
                        <Typography variant="subtitle1" mb={1}>
                          Item {index + 1}
                        </Typography>

                        <TextField
                          fullWidth
                          label="Item Text"
                          name={`items[${index}].text`}
                          value={values.items[index].text}
                          onChange={handleChange}
                          error={Boolean(textError)}
                          helperText={textError}
                          margin="normal"
                        />

                        <TextField
                          fullWidth
                          label="Item Description"
                          name={`items[${index}].description`}
                          value={values.items[index].description}
                          onChange={handleChange}
                          error={Boolean(descriptionError)}
                          helperText={descriptionError}
                          margin="normal"
                        />

                        <IconButton
                          onClick={() => remove(index)}
                          disabled={values.items.length === 1}
                          color="error"
                          sx={{ mt: 1 }}
                        >
                          <RemoveCircle />
                        </IconButton>
                      </Box>
                    );
                  })}

                  <Button
                    startIcon={<AddCircle />}
                    onClick={() => push({ id: '', text: '', description: '', selected: false })}
                    sx={{ mb: 0.5, mr: 1, color: '#b86935' }}
                  >
                    Add Another Item
                  </Button>
                </Box>
              )}
            </FieldArray>

            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              sx={{ backgroundColor: 'rgb(183, 105, 53)', mt: 1 }}
            >
              {editItem ? 'Update Pre Umrah Item' : 'Add Pre Umrah Item'}
            </Button>

            {errors.items && typeof errors.items === 'string' && (
              <Typography color="error" sx={{ mt: 1 }}>
                {errors.items}
              </Typography>
            )}
          </Form>
        )}
      </Formik>
    </Box>
  );
}
