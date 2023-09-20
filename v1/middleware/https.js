export default ({ req, redirect }) => {
  if (process.env.buildEnv !== "local" && req && req.url !== "/health") {
    const protocol = req.headers["x-forwarded-proto"] || (req.connection.encrypted ? "https" : "http")
    if (req.headers.host === "www.mark-cs.com") {
      return redirect(301, `https://mark-cs.com${req.url}`)
    }
    if (protocol === "http") {
      return redirect(301, `https://${req.headers.host}${req.url}`)
    }
  }
}
