'use client'

import Image from 'next/image'
import { Container } from './Container'
import iphone from '@/images/iphone-feature1.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function FeaturePhone({ direction = 'left' }) {
  // Determine if the content should be ordered normally or reversed
  const isReversed = direction === 'right'

  return (
    <section className={`md:my:32 relative my-24 lg:my-48`}>
      <div className="bg-custom-gradient absolute bottom-0 -z-10 h-full w-screen opacity-10" />
      <Container>
        <div
          className={` relative overflow-y-clip lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20 ${
            isReversed ? 'lg:row-start-1' : ''
          }`}
        >
          <div
            className={`my-auto max-lg:mb-16 lg:col-span-6 ${
              isReversed ? 'lg:order-last' : ''
            }`}
          >
            <h3 className="text-3xl font-medium tracking-tight text-gray-900 md:text-4xl">
              Easy to find
            </h3>
            <p className="mt-6 text-lg text-gray-600">
              Unlock the Limitless Potential of Your Mind: Soon available on
              IOS, our breakthrough app blends your voice with AI-generated
              binaural beats for transformative results. Tempor reprehenderit do
              sunt ipsum aliqua culpa adipisicing anim nostrud in enim
              consectetur ut. Tempor reprehenderit do sunt ipsum aliqua culpa
            </p>
          </div>

          <motion.div
            className={`relative mx-10 flex items-center justify-center md:mx-0 lg:col-span-6 lg:justify-${
              isReversed ? 'start' : 'end'
            }`}
            // style={{ y }}
          >
            <Image
              src={iphone}
              alt="Picture of the author"
              layout="cover" // required
              objectFit="cover" // change to suit your needs
              className="drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export function FeaturePreview() {
  return (
    <>
      <FeaturePhone direction="right" />
      <FeaturePhone direction="left" />
    </>
  )
}

{
  /* <section className="relative lg:pt-32">
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className='text-gray-900" text-3xl font-medium tracking-tight'>
              Elevate your personal development
            </h2>
            <p className="mt-2 text-lg">
              Unlock the Limitless Potential of Your Mind: Soon available on
              IOS, our breakthrough app blends your voice with AI-generated
              binaural beats for transformative results.
            </p>
          </div>
        </Container>
      </section> */
}
