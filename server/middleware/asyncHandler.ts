const asyncHandler = (asyncFunc) =>
  async function (req, res, next) {
    try {
      await asyncFunc(req, res);
    } catch (err) {
      return next(err);
    }
  };
export default asyncHandler;
