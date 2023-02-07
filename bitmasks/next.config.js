// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = (phase) =>{
  const redirects = () => {
    return [
      { source: '/ButtonGroup/buttonGroup', destination: '/', permanent: true}
    ]
  }
  return {
    redirects,
  }
}