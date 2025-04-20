import { _posts } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { HajjGuideView } from 'src/sections/hajj-guide/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>Hajj Guide</title>
      <HajjGuideView />
    </>
  );
}
