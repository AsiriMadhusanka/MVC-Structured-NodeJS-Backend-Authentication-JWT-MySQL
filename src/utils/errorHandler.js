module.exports = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    console.error(err.stack); // Log the error stack
    res.status(status).json({ message });
  };
  
  module.exports = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    console.error(err.stack); // Log the error stack
    res.status(status).json({ message });
  };
  

  module.exports = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    console.error(err.stack); // Log the error stack
    res.status(status).json({ message });
   };
   

   exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
   };
   


   exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
   };
   

   exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
   };
   

   exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
   };
   