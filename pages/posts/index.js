import React from 'react'
import Editeur from '@/components/pages/post/FormPost'

export default function index() {
  return (
    <section className="flex flex-col w-full h-full justify-center items-center mt-10 gap-10">
        <h4> I want to sell my art</h4>
          <Editeur />
    </section>
  )
}
