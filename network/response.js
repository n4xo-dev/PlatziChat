export function success(req, res, msg, status) {
  res.status(status || 200).send({
    error: '',
    message: msg,
  });
}

export function error(req, res, msg, status) {
  res.status(status || 500).send({
    error: msg,
    message: '',
  });
}