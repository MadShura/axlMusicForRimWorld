
export default function getReqHeader(req, res): void {
  const bb = {}
  for (let i = 0; i < req.rawHeaders.length; i += 2) {
    const element = req.rawHeaders[i];
    bb[element] = req.rawHeaders[i + 1];
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(bb));

}

