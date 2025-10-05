"use client"
import StudentCardSection from '@/components/StudentCard/StudentCardSection'
import React, { useEffect } from 'react'

// ==================== Students Page ====================
export default function Page() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [])

  // ==================== Return ====================
  return (
    <div className="relative isolate px-2 min-h-screen">
      <StudentCardSection HorizontalScroll={false} />
    </div>
  )
}

// ============================================================================
