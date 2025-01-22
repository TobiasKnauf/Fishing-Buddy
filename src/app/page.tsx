'use client'

import dynamic from "next/dynamic";

const Map = dynamic(() => import('../features/water-map/components/waterMap'), { ssr: false, });

export default function Page() {
  return (
    <div>
      <Map />
    </div>
  )
}