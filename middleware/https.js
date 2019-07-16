export default ({ req, redirect }) => {
  console.log(process.env)
  if (process.env.buildEnv !== "local" && req && req.url !== "/health") {
    const protocol = req.headers["x-forwarded-proto"] || (req.connection.encrypted ? "https" : "http")
    if (protocol === "http") {
      return redirect(301, `https://${req.headers.host}${req.url}`)
    }
  }
}
