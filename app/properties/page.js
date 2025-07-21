import React, { Suspense } from 'react';
import Properties from 'app/components/Properties/PropertiesPage'
import PriceFilter from "../components/Properties/PriceFilter";


function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Properties />
    </Suspense>
  )
}

export default page
