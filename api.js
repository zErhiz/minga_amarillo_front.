let apiUrl = 'https://minga-amarillo-back-xeji.onrender.com/'

if (process.env.NODE_ENV==='production') {
    apiUrl = import.meta.env.VITE_URL
}

export default apiUrl