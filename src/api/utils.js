export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export const checkStatusWith = whitelistStatus => response => {
  const { status, statusText } = response;
  if ((status >= 200 && status < 300) || whitelistStatus.includes(status)) {
    return response;
  }
  const error = new Error(statusText);
  error.response = response;
  throw error;
};

export const parseJSON = response => {
  const { status, statusText } = response;
  if (status >= 200 && status < 300) {
    return response.json();
  }
  return { status, statusText };
};
