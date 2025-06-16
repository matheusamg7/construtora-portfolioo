import MinimalHeader from '@/components/MinimalHeader'
import MainLayout from '@/components/MainLayout'
import HeroCards from '@/components/HeroCards'
import StorySection from '@/components/StorySection'
import TransitionSection from '@/components/TransitionSection'
import NumbersSection from '@/components/NumbersSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import TimelineSection from '@/components/TimelineSection'
import ProcessSection from '@/components/ProcessSection'
import DifferentialsSection from '@/components/DifferentialsSection'
import FinancingSection from '@/components/FinancingSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <MinimalHeader />
      <MainLayout>
        <HeroCards />
        <StorySection />
        <FeaturedProjects />
        <FinancingSection />
        <TimelineSection />
        <DifferentialsSection />
        <ContactSection />
        <Footer />
      </MainLayout>
    </>
  )
}
