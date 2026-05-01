import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, Users, Check, ArrowRight, Mic, Video, Gamepad2, Scissors, Camera, Smartphone, Clapperboard } from 'lucide-react'

const rooms = [
  { id: 'podcast', icon: Mic, name: 'Podcast Room', price: '₹499/hour' },
  { id: 'interview', icon: Clapperboard, name: 'Interview Room', price: '₹599/hour' },
  { id: 'youtube', icon: Video, name: 'YouTube Studio', price: '₹549/hour' },
  { id: 'gaming', icon: Gamepad2, name: 'Gaming Room', price: '₹399/hour' },
  { id: 'editing', icon: Scissors, name: 'Editing Suite', price: '₹349/hour' },
  { id: 'photo', icon: Camera, name: 'Photography Studio', price: '₹449/hour' },
  { id: 'reel', icon: Smartphone, name: 'Reel Setup Room', price: '₹299/hour' },
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
]

export default function Booking() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [selectedRoom, setSelectedRoom] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Helmet>
        <title>Book Studio in Gaya | Podcast, YouTube, Gaming Room Booking | Snapforest</title>
        <meta name="description" content="Book professional studios in Gaya. Podcast room, YouTube studio, gaming room & more. Easy online booking at Snapforest." />
        <meta name="keywords" content="book studio Gaya, podcast room booking, YouTube studio booking, gaming room booking, studio booking near me" />
        <link rel="canonical" href="https://www.snapforest.in/booking" />
      </Helmet>

      <section className="pt-32 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Book Your <span className="text-emerald-400">Studio</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Book the best creator studios in Gaya. Select your room, date & time – we'll handle the rest.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Room Selection */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Mic className="w-5 h-5 text-emerald-400" />
                  Select a Room
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {rooms.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoom(room.id)}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                        selectedRoom === room.id
                          ? 'border-emerald-400 bg-emerald-400/10'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <room.icon className="w-8 h-8 text-emerald-400 shrink-0" />
                      <div>
                        <p className="text-white font-medium">{room.name}</p>
                        <p className="text-emerald-400 text-sm">{room.price}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-emerald-400" />
                    Select Date
                  </h2>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-emerald-400" />
                    Select Time
                  </h2>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
                  >
                    <option value="" className="bg-zinc-900">Choose a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-zinc-900">{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-400" />
                  Your Details
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                />
                <textarea
                  placeholder="Any special requirements?"
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none resize-none"
                />

                {submitted ? (
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-4 rounded-xl">
                    <Check className="w-5 h-5" />
                    Booking request submitted! We'll contact you soon.
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    Confirm Booking
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </form>
            </div>

            {/* Summary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit">
              <h3 className="text-lg font-semibold text-white mb-4">Booking Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Room</span>
                  <span className="text-white">{selectedRoom ? rooms.find(r => r.id === selectedRoom)?.name : 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date</span>
                  <span className="text-white">{selectedDate || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Time</span>
                  <span className="text-white">{selectedTime || 'Not selected'}</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between">
                  <span className="text-gray-400">Estimated Price</span>
                  <span className="text-emerald-400 font-semibold">
                    {selectedRoom ? rooms.find(r => r.id === selectedRoom)?.price : '—'}
                  </span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-emerald-400/10 rounded-xl">
                <p className="text-emerald-400 text-xs">
                  <Check className="w-4 h-4 inline mr-1" />
                  Free cancellation up to 24 hours before booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
