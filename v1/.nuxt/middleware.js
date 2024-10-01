const middleware = {}

middleware['https'] = require('../middleware/https.js')
middleware['https'] = middleware['https'].default || middleware['https']

export default middleware
