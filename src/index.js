const server = require('./routes/userRoutes')

const PORT = process.env.port || 3000

console.log(PORT)

server.listen(PORT , () => {
   `servidor rodando na porta ${PORT}`
})