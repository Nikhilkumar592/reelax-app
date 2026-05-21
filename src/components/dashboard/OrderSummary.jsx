import { useState } from 'react'
import { Tag, Wallet, ChevronUp, ChevronDown, CircleCheck, Circle, Zap } from 'lucide-react'

const COUPONS = [
  {
    code: 'WELCOME20',
    description: '20% off on your first month',
    discountPercent: 20,
  },
  {
    code: 'ANNUAL50',
    description: '50% off on annual plans',
    discountPercent: 50,
  },
]

const PLAN = {
  name: 'Startup',
  price: 4999,
  period: 'month',
  credits: '5,000',
}

export default function OrderSummary() {
  const [couponOpen, setCouponOpen] = useState(true)
  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20')
  const [couponInput, setCouponInput] = useState('')
  const [walletApplied, setWalletApplied] = useState(false)

  const subtotal = PLAN.price * 3 // 3 months for display
  const tax = parseFloat((subtotal * 0.18).toFixed(2))
  const walletBalance = 500

  const discount = selectedCoupon
    ? (COUPONS.find(c => c.code === selectedCoupon)?.discountPercent || 0)
    : 0

  const discountAmount = (subtotal * discount) / 100
  const walletDeduction = walletApplied ? walletBalance : 0
  const total = subtotal + tax - discountAmount - walletDeduction

  const formatINR = (amount) =>
    new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2 }).format(amount)

  const handleApplyCoupon = () => {
    const found = COUPONS.find(c => c.code === couponInput.trim().toUpperCase())
    if (found) setSelectedCoupon(found.code)
    setCouponInput('')
  }

  return (
    <aside className="bg-white rounded-xl border border-gray-100 shadow-card p-6 flex flex-col gap-5">
      <h2 className="text-xl font-bold text-gray-900 tracking-tight">Order Summary</h2>

      {/* Plan Card */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">₹{PLAN.price.toLocaleString('en-IN')}</span>
            <span className="text-sm text-gray-500">/{PLAN.period}</span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">Includes {PLAN.credits} credits/mo.</p>
        </div>
        <div className="text-right">
          <p className="text-xxs font-semibold text-blue-600 uppercase tracking-wide mb-0.5">Selected Plan</p>
          <p className="text-base font-bold text-gray-900">{PLAN.name}</p>
        </div>
      </div>

      {/* Upgrade prompt */}
      <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-200
                         text-sm text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-150">
        <Zap className="w-4 h-4 text-blue-500" />
        Upgrade to Growth Plan
      </button>

      {/* Wallet */}
      <div className="border border-gray-100 rounded-lg p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Wallet className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">Wallet Balance</p>
            <p className="text-xs text-gray-400">₹{walletBalance.toFixed(2)} available</p>
          </div>
        </div>
        <button
          onClick={() => setWalletApplied(v => !v)}
          className={`text-sm font-semibold px-3 py-1.5 rounded-md transition-all duration-150
            ${walletApplied
              ? 'bg-green-50 text-green-700 hover:bg-green-100'
              : 'text-blue-600 hover:bg-blue-50'}`}
        >
          {walletApplied ? 'Applied ✓' : 'Apply'}
        </button>
      </div>

      {/* Coupon Section */}
      <div className="border border-gray-100 rounded-lg overflow-hidden">
        {/* Header */}
        <button
          onClick={() => setCouponOpen(v => !v)}
          className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Tag className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-semibold text-gray-800">Apply Coupon</span>
          </div>
          {couponOpen
            ? <ChevronUp className="w-4 h-4 text-gray-400" />
            : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </button>

        {/* Body */}
        {couponOpen && (
          <div className="px-4 pb-4 flex flex-col gap-3 border-t border-gray-50">
            {/* Input */}
            <div className="flex items-center gap-2 mt-3">
              <input
                type="text"
                value={couponInput}
                onChange={e => setCouponInput(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-md bg-white
                           placeholder-gray-400 text-gray-800
                           focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                           transition-all duration-150"
                onKeyDown={e => e.key === 'Enter' && handleApplyCoupon()}
              />
              <button
                onClick={handleApplyCoupon}
                className="px-3.5 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700
                           hover:bg-blue-50 rounded-md transition-all duration-150"
              >
                Apply
              </button>
            </div>

            {/* Coupon options */}
            <div className="flex flex-col gap-2">
              {COUPONS.map(coupon => {
                const isSelected = selectedCoupon === coupon.code
                return (
                  <button
                    key={coupon.code}
                    onClick={() => setSelectedCoupon(isSelected ? '' : coupon.code)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg border text-left
                                transition-all duration-150
                                ${isSelected
                                  ? 'bg-blue-50 border-blue-200'
                                  : 'bg-gray-50 border-gray-100 hover:border-gray-200'}`}
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{coupon.code}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{coupon.description}</p>
                    </div>
                    {isSelected
                      ? <CircleCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      : <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Price Breakdown */}
      <div className="flex flex-col gap-2.5 pt-1">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Subtotal</span>
          <span className="text-sm text-gray-800 font-medium">₹{formatINR(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-green-600">Discount ({discount}%)</span>
            <span className="text-sm text-green-600 font-medium">-₹{formatINR(discountAmount)}</span>
          </div>
        )}
        {walletApplied && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-green-600">Wallet</span>
            <span className="text-sm text-green-600 font-medium">-₹{formatINR(walletDeduction)}</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Tax (18% GST)</span>
          <span className="text-sm text-gray-800 font-medium">₹{formatINR(tax)}</span>
        </div>
        <div className="h-px bg-gray-100 my-1" />
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-800">Total due today</span>
          <span className="text-xl font-bold text-blue-600">{formatINR(total)}</span>
        </div>
      </div>

      {/* CTA */}
      <button className="w-full bg-blue-600 text-white text-sm font-semibold py-3 rounded-lg
                         hover:bg-blue-700 active:scale-[0.99] transition-all duration-150 mt-1">
        Proceed to Payment
      </button>
    </aside>
  )
}
