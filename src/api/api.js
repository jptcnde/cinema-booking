import { parseJSON, checkStatus, checkStatusWith } from './utils';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export async function getTickets() {
  return fetch(`${API_ENDPOINT}/tickets`)
    .then(checkStatus)
    .then(parseJSON);
}

export async function getCinemaList() {
  return fetch(`${API_ENDPOINT}/cinema`)
    .then(checkStatus)
    .then(parseJSON);
}

export async function getPatrons() {
  return fetch(`${API_ENDPOINT}/patron`)
    .then(checkStatus)
    .then(parseJSON);
}

const CONCURRENT_STATUS_CODES = [409];
export async function bookTickets(body) {
  const req = {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  };
  return fetch(`${API_ENDPOINT}/tickets`, req)
    .then(checkStatusWith(CONCURRENT_STATUS_CODES))
    .then(parseJSON);
}

export async function unbookTicket(body) {
  const req = {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  };
  return fetch(`${API_ENDPOINT}/unbook`, req)
    .then(checkStatus)
    .then(parseJSON);
}

bookTickets.CONCURRENT_STATUS_CODES = CONCURRENT_STATUS_CODES;
