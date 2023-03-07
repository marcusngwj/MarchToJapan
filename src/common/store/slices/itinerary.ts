import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { defaultDay, defaultTime } from '@/common/constants/itinerary';

export interface ItineraryState {
  day: string;
  time: string;
}

/**
 * Default state object with initial values.
 */
const initialState: ItineraryState = {
  day: defaultDay,
  time: defaultTime,
} as const;

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be changed based on your needs.
 */
export const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState,
  reducers: {
    setDay: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.day>
    ) => {
      state.day = action.payload;
    },
    setTime: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.time>
    ) => {
      state.time = action.payload;
    },
  },
});

// A small helper of itinerary state for `useSelector` function.
export const getItineraryState = (state: { itinerary: ItineraryState }) => state.itinerary;

// Exports all actions
export const { setDay, setTime } = itinerarySlice.actions;

export default itinerarySlice.reducer;