export default function errorHandler(req, res, next) {
res.status(404).json ({msg:'Error:Requested Page Page Not Found'})
}