export default function checkLoggedIn(req, res, next) {
  if (req.session?.username) {
    next();
  } else {
    next(new Error("User is not in session."));
  }
}
