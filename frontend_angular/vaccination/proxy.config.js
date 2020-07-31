const proxy = [
    {
      context: '/api',
      target: 'http://dashdb-txn-sbox-yp-dal09-12.services.dal.bluemix.net:50000',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;