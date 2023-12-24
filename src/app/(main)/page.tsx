import CTABox from '@/components/CTABox'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { FeaturePreview } from '@/components/FeaturePreview'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <PrimaryFeatures /> */}
      {/* <SecondaryFeatures /> */}
      {/* <CTABox /> */}
      <CallToAction />
      <FeaturePreview />
      {/* <Reviews /> */}
      {/* <Pricing /> */}
      {/* <Faqs />  */}
    </>
  )
}
