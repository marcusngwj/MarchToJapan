import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { route } from "@/common/constants/route"

export interface NavigationState {
  currentIndex: number;
}

/**
 * Default state object with initial values.
 */
const initialState: NavigationState = {
  currentIndex: route.home.index,
} as const;

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be changed based on your needs.
 */
export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigationIndex: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.currentIndex>
    ) => {
      state.currentIndex = action.payload;
    },
  },
});

// A small helper of navigation state for `useSelector` function.
export const getNavigationState = (state: { navigation: NavigationState }) => state.navigation;

// Exports all actions
export const { setNavigationIndex } = navigationSlice.actions;

export default navigationSlice.reducer;