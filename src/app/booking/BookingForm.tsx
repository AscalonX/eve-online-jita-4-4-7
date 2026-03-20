'use client'

import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import DateReserve from '@/components/DateReserve'

export default function BookingForm() {
  const [venue, setVenue] = useState('')

  return (
    <form className="w-full max-w-md flex flex-col gap-6 items-center">
      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
        fullWidth
      />
      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
        fullWidth
      />
      <FormControl variant="standard" fullWidth>
        <InputLabel id="venue-label">Venue</InputLabel>
        <Select
          labelId="venue-label"
          id="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
      </FormControl>
      <DateReserve />
      <button
        type="submit"
        name="Book Venue"
        className="mt-4 px-8 py-3 bg-gray-800 text-white hover:bg-gray-700 transition-colors font-semibold"
      >
        Book Venue
      </button>
    </form>
  )
}
