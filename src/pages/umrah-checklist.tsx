import { _posts } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { UmrahCheckListView } from 'src/sections/umrah-checklist/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>Umrah Checklist</title>

      <UmrahCheckListView />
    </>
  );
}
