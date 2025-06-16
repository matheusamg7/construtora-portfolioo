import MinimalHeader from '@/components/MinimalHeader'
import MainLayout from '@/components/MainLayout'
import PortfolioSection from '@/components/PortfolioSection'
import Footer from '@/components/Footer'

export default function PortfolioPage() {
  return (
    <>
      <MinimalHeader />
      <MainLayout>
        <div className="pt-20">
          <PortfolioSection />
        </div>
        <Footer />
      </MainLayout>
    </>
  )
}