const clog = (req, res, next) => {
  const fgCyan = "\x1b[36m";
  switch (req.method) {
    case "GET": {
      // if req.method==="Get"
      console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    case "POST": {
      //if req.method==="Post"
      console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    default:
      console.log(`📙${fgCyan}${req.method} request to ${req.path}`);
  }

  next();
};

exports.clog = clog;
