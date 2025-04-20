import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';
import MosqueIcon from '@mui/icons-material/Mosque';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import ChecklistIcon from '@mui/icons-material/Checklist';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} />;

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
};

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Dua Collection',
    path: '/dua-collection',
    icon: <AddToPhotosIcon />,
  },
  {
    title: 'Pre Umrah',
    path: '/pre-umrah',
    icon: <MosqueIcon />,
  },
  {
    title: 'Hajj Guide',
    path: '/hajj-guide',
    icon: <SignLanguageIcon />,
  },
  {
    title: 'Umrah Checklist',
    path: '/umrah-checklist',
    icon: <ChecklistIcon />,
  },
  {
    title: 'Safety Guide',
    path: '/safety-guide',
    icon: <HealthAndSafetyIcon />,
  },
  {
    title: 'Sign in',
    path: '/sign-in',
    icon: icon('ic-lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic-disabled'),
  },
];
