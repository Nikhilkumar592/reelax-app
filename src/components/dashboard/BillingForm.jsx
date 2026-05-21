import { useState } from 'react'
import FormInput from '../common/FormInput'
import FormSelect from '../common/FormSelect'
import Button from '../common/Button'

const INDIAN_STATES = [
  { value: 'AP', label: 'Andhra Pradesh' },
  { value: 'TG', label: 'Telangana' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'DL', label: 'Delhi' },
  { value: 'GJ', label: 'Gujarat' },
  { value: 'RJ', label: 'Rajasthan' },
  { value: 'UP', label: 'Uttar Pradesh' },
  { value: 'WB', label: 'West Bengal' },
]

const CITIES = {
  TG: [{ value: 'hyd', label: 'Hyderabad' }, { value: 'wgl', label: 'Warangal' }],
  AP: [{ value: 'vij', label: 'Vijayawada' }, { value: 'vis', label: 'Visakhapatnam' }],
  MH: [{ value: 'mum', label: 'Mumbai' }, { value: 'pun', label: 'Pune' }],
  KA: [{ value: 'blr', label: 'Bengaluru' }, { value: 'mys', label: 'Mysuru' }],
  TN: [{ value: 'che', label: 'Chennai' }, { value: 'cbe', label: 'Coimbatore' }],
  DL: [{ value: 'ndl', label: 'New Delhi' }],
  GJ: [{ value: 'ahm', label: 'Ahmedabad' }, { value: 'sur', label: 'Surat' }],
  RJ: [{ value: 'jai', label: 'Jaipur' }, { value: 'jod', label: 'Jodhpur' }],
  UP: [{ value: 'lko', label: 'Lucknow' }, { value: 'agr', label: 'Agra' }],
  WB: [{ value: 'kol', label: 'Kolkata' }, { value: 'how', label: 'Howrah' }],
}

export default function BillingForm({ onCancel, onSave }) {
  const [form, setForm] = useState({
    companyName: 'abhigyan',
    email: 'abhigyan.pandey@getreelax.com',
    gstNumber: '',
    panNumber: '',
    premise: '',
    street: '',
    state: '',
    city: '',
    country: 'India',
    pinCode: '',
  })

  const set = (field) => (val) => setForm(prev => ({ ...prev, [field]: val }))

  const cityOptions = form.state ? (CITIES[form.state] || []) : []

  const handleSave = () => {
    onSave?.(form)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-card p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Review your details</h1>

      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
          Billing Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Row 1 */}
          <FormInput
            id="companyName"
            label="Company Name"
            placeholder="Company name"
            value={form.companyName}
            onChange={set('companyName')}
          />
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={set('email')}
          />

          {/* Row 2 */}
          <FormInput
            id="gstNumber"
            label="GST Number"
            optional
            placeholder="GST Number"
            value={form.gstNumber}
            onChange={set('gstNumber')}
          />
          <FormInput
            id="panNumber"
            label="PAN Number"
            optional
            placeholder="PAN Number"
            value={form.panNumber}
            onChange={set('panNumber')}
          />

          {/* Row 3 */}
          <FormInput
            id="premise"
            label="Premise/House no."
            placeholder="Premise/House no."
            value={form.premise}
            onChange={set('premise')}
          />
          <FormInput
            id="street"
            label="Street"
            placeholder="Street"
            value={form.street}
            onChange={set('street')}
          />

          {/* Row 4 */}
          <FormSelect
            id="state"
            label="State"
            placeholder="Select state"
            value={form.state}
            onChange={(val) => {
              set('state')(val)
              set('city')('')
            }}
            options={INDIAN_STATES}
          />
          <FormSelect
            id="city"
            label="City"
            placeholder="Select city"
            value={form.city}
            onChange={set('city')}
            options={cityOptions}
          />

          {/* Row 5 */}
          <FormInput
            id="country"
            label="Country"
            placeholder="Country"
            value={form.country}
            onChange={set('country')}
          />
          <FormInput
            id="pinCode"
            label="Pin Code"
            placeholder="Pincode"
            value={form.pinCode}
            onChange={set('pinCode')}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 pt-2">
        <Button variant="ghost" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" onClick={handleSave}>Save Details</Button>
      </div>
    </div>
  )
}
