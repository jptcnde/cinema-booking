// dummy logger
// ideally to mimic production error handler or reporting tool like "sentry"
export default function logger(msg, type) {
  switch (type) {
    case 'err':
      window.console.error(msg);
      break;

    default:
      window.console.log(msg);
      break;
  }
}
