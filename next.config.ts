import withPWA from '@ducanh2912/next-pwa'

const isProd = process.env.NODE_ENV === 'production'

const config = {
    dest: 'public',
}

export default isProd
    ? withPWA(config)
    : config
