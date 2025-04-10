import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"

export default function Reservation() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-12 tracking-wider font-serif">RESERVATION</h1>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <ReservationForm />
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-700">For parties larger than 8, please contact us directly:</p>
          <p className="text-amber-800 font-medium">+91-9875022502 | reservations@opulentpour.com</p>
        </div>
      </div>
    </main>
  )
}

function ReservationForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <Input id="name" placeholder="Your full name" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input id="email" type="email" placeholder="Your email address" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input id="phone" placeholder="Your phone number" />
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Guests
          </label>
          <Select>
            <SelectTrigger id="guests">
              <SelectValue placeholder="Select number of guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Person</SelectItem>
              <SelectItem value="2">2 People</SelectItem>
              <SelectItem value="3">3 People</SelectItem>
              <SelectItem value="4">4 People</SelectItem>
              <SelectItem value="5">5 People</SelectItem>
              <SelectItem value="6">6 People</SelectItem>
              <SelectItem value="7">7 People</SelectItem>
              <SelectItem value="8">8 People</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Pick a date</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
            Time
          </label>
          <Select>
            <SelectTrigger id="time">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12:00">12:00 PM</SelectItem>
              <SelectItem value="12:30">12:30 PM</SelectItem>
              <SelectItem value="13:00">1:00 PM</SelectItem>
              <SelectItem value="13:30">1:30 PM</SelectItem>
              <SelectItem value="14:00">2:00 PM</SelectItem>
              <SelectItem value="14:30">2:30 PM</SelectItem>
              <SelectItem value="19:00">7:00 PM</SelectItem>
              <SelectItem value="19:30">7:30 PM</SelectItem>
              <SelectItem value="20:00">8:00 PM</SelectItem>
              <SelectItem value="20:30">8:30 PM</SelectItem>
              <SelectItem value="21:00">9:00 PM</SelectItem>
              <SelectItem value="21:30">9:30 PM</SelectItem>
              <SelectItem value="22:00">10:00 PM</SelectItem>
              <SelectItem value="22:30">10:30 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="special-requests" className="block text-sm font-medium text-gray-700 mb-1">
          Special Requests
        </label>
        <Input id="special-requests" placeholder="Any special requests or dietary requirements" />
      </div>

      <div className="pt-4">
        <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white py-6">Book Table</Button>
      </div>
    </form>
  )
}
