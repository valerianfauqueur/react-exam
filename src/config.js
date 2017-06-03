export default function() {
  switch(process.env.NODE_ENV) {
    case 'development':
      return {
        API_HOST: 'http://localhost:3001/'
      }

    default:
      console.error(`It seems like your environment "${process.env.NODE_ENV}" is not supported. Change NODE_ENV or config.js`);
  }
}
