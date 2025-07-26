export default {
   serverAssets: [{ baseName: 'messages', dir: './messages' }],
   publicAssets: [
      {
         dir: './public',
         maxAge: 60 * 60 * 24 * 7, // 1 week
      },
   ],
}
