'use client'

//libraries
import dynamic from "next/dynamic";

const Map = dynamic(() =>
  import('../features/water-map/components/waterMap'),
  {
    loading: () => <p>Map is loading...</p>,
    ssr: false,
  });

export default function Page() {
  return (
    <div>
      <Map />
    </div>
  )
}