export default function logger(req, res, next) {
console.log("checking middleware is working from logger",`${req.method} ${req.url}`);
next();
}

