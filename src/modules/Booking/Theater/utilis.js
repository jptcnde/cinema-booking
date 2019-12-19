import range from 'lodash/range'; // natively -> const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
import { STATUSES } from '../../../domain-components/Seat/constants';

// can be range('a'.charCodeAt(0), 'z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// limit the row seat (26)
const cellChars = Array.from('abcdefghijklmnopqrstuvwxyz');

export function createTheater(rows, columns) {
  if (rows > cellChars.length) {
    throw Error('Rows can ony be up 26');
  }

  return range(0, rows - 1).reduce(
    (rowAcc, nxRow) => [
      ...rowAcc,
      range(0, columns - 1).reduce(
        (colAcc, nxCol) => [
          ...colAcc,
          {
            id: `${nxRow},${nxCol}`,
            cell: [nxRow, nxCol],
            text: `${String(cellChars[nxRow]).toUpperCase()}:${String(
              nxCol
            ).padStart(2, '0')}`
          }
        ],
        []
      )
    ],
    []
  );
}

export function getStatus(props) {
  const { booked, unavailable, statusId, selected } = props;

  if (unavailable.includes(statusId)) {
    return STATUSES.unavailable;
  }

  if (booked.includes(statusId)) {
    return STATUSES.booked;
  }

  if (selected.includes(statusId)) {
    return STATUSES.selected;
  }

  return STATUSES.available;
}
