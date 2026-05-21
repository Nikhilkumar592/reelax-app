import { ArrowLeft } from 'lucide-react'
import BillingForm from './BillingForm'
import OrderSummary from './OrderSummary'

export default function CheckoutPage() {
  const handleBack = () => {
    console.log('Navigate back to plans')
  }

  const handleCancel = () => {
    console.log('Cancel')
  }

  const handleSave = (data) => {
    console.log('Saved billing info:', data)
  }

  return (
    <main className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <button
          onClick={handleBack}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700
                     mb-5 transition-colors duration-150 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-150" />
          Back to plans
        </button>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
          {/* Left: Billing Form */}
          <BillingForm onCancel={handleCancel} onSave={handleSave} />

          {/* Right: Order Summary */}
          <OrderSummary />
        </div>
      </div>
    </main>
  )
}
