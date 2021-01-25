const details = [
  {
    id: 1,
    name: 'Passenger Seat',
    description: null,
  },
  {
    id: 2,
    name: 'Number of Keys',
    description: '2',
  },
  {
    id: 3,
    name: 'Arm Rest',
    description: 'An arm rest between the front two seats.',
  },
  {
    id: 4,
    name: 'Light Scratches',
    description: 'Multiple small scratches',
    location: 'Rear Bumper',
  },
  {
    id: 5,
    name: 'Chips',
    description: null,
    location: 'Hood',
  },
];

class Api {
  getDetails = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return details;
  };
}

export const api = new Api();
