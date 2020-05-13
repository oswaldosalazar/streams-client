// Sample code
// Array-based approach 
const EDIT_STREAM = {}
const EDIT_STREAM1 = {}
const EDIT_STREAM2 = {}

const streamReducer = ( state = [], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map(stream => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
    default:
      return state;
  }
};

// Object-based approach 1
const streamReducer1 = (state={}, action) => {
  switch (action.type) {
    case EDIT_STREAM1:
      const newState = { ...state};
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
}

// Object-based approach 2 (key interpolation)
const streamReducer2 = (state={}, action) => {
  switch (action.type) {
    case EDIT_STREAM2:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}

// Another example

const animalSounds = { cat: 'meow', dog: 'bark' };

const animal = 'lion'
const sound = 'roar'

const newAnimalSounds = { ...animalSounds, [animal]: sound }

