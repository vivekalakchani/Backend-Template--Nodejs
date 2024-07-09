const uncaughtException = process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION 🎇 shut down........");
  console.log(err.name, err.message);

  process.exit(1);
});

const unHandleRejection = process.on("unHandleRejection", (err) => {
  console.log("UNHANDLED REJECTION 🎇 shut down........");
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
module.exports = {
  UnHandleRejection: unHandleRejection,
  UncaughtException: uncaughtException,
};
