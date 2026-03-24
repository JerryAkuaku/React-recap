import React from 'react'


export default function GoogleButton({ children, onClick }) {
return (
<button
onClick={onClick}
className="w-full inline-flex items-center justify-center gap-3 px-4 py-2 rounded-md bg-white text-gray-800 font-medium shadow-sm hover:shadow-md transition"
>
<svg width="18" height="18" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
<path d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272.1v95.5h147.1c-6.3 34-25.1 62.8-53.6 82v68.3h86.5c50.6-46.6 80.4-115.3 80.4-195.4z" fill="#4285F4"/>
<path d="M272.1 544.3c72.6 0 133.6-23.9 178.2-64.8l-86.5-68.3c-24.1 16.2-55 25.8-91.7 25.8-70.5 0-130.3-47.7-151.7-111.8H31.7v70.5C75.8 486.4 168.5 544.3 272.1 544.3z" fill="#34A853"/>
<path d="M120.4 326.9c-10.8-32.3-10.8-66.9 0-99.2V157.2H31.7c-38.7 77.5-38.7 169.7 0 247.2l88.7-77.5z" fill="#FBBC05"/>
<path d="M272.1 108.1c39 0 74 13.4 101.6 39l76.2-76.2C405.7 24.1 344.7 0 272.1 0 168.5 0 75.8 57.9 31.7 157.2l88.7 70.5c21.4-64.1 81.2-111.8 151.7-111.8z" fill="#EA4335"/>
</svg>
<span>{children}</span>
</button>
)
}