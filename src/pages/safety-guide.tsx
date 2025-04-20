import { _posts } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { SafetyGuideView } from 'src/sections/safety-guide/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>Safety Guide</title>

      <SafetyGuideView />
    </>
  );
}
