import React, { Suspense } from 'react';
import Properties from 'app/components/Properties/PropertiesPage'


function page() {
  return (
    <Suspense fallback={<div>Loading properties...</div>}>
      <Properties />
    </Suspense>
  )
}

export default page
