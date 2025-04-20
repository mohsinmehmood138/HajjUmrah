import * as Yup from 'yup';

interface Dua {
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  description: string;
  additionalInfo: string;
}

export const initialValues: Dua = {
  title: '',
  arabic: '',
  transliteration: '',
  translation: '',
  description: '',
  additionalInfo: '',
};

export const DuaSchema = Yup.object().shape({
  title: Yup.string().required('Title is required').min(3, 'Title should be at least 3 characters'),
  arabic: Yup.string().required('Arabic text is required'),
  transliteration: Yup.string().required('Transliteration is required'),
  translation: Yup.string().required('Translation is required'),
  description: Yup.string().required('Description is required'),
  additionalInfo: Yup.string(),
});

export const ChecklistSectionSchema = Yup.object().shape({
  label: Yup.string()
    .required('Section label is required')
    .min(3, 'Label should be at least 3 characters'),
  items: Yup.array()
    .of(
      Yup.object().shape({
        text: Yup.string()
          .required('Item text is required')
          .min(2, 'Text should be at least 2 characters'),
        description: Yup.string()
          .required('Item description is required')
          .min(5, 'Description should be at least 5 characters'),
      })
    )
    .min(1, 'At least one item is required'),
});

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

export const initialValuesPreUmrah: ChecklistSectionForm = {
  label: '',
  showValue: false,
  items: [
    {
      id: '',
      text: '',
      description: '',
      selected: false,
    },
  ],
};
