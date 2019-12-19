export const STATUSES = {
  available: 0,
  booked: 1,
  selected: 2,
  unavailable: 3
};

export const STATUS_DESC = {
  [STATUSES.available]: 'Available',
  [STATUSES.booked]: 'Taken',
  [STATUSES.selected]: 'Selected',
  [STATUSES.unavailable]: 'Unavailable'
};

export const STATUS_COLORS = {
  [STATUSES.available]: 'common.purple.300',
  [STATUSES.booked]: 'common.red.800',
  [STATUSES.selected]: 'common.yellow.600',
  [STATUSES.unavailable]: 'common.grey.600'
};
