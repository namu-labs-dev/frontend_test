import React from "react";

const MessageSection: React.FC = () => {
  return (
    <div className='bg-[#1C1C1E] p-4 text-white'>
      <h2 className='mb-4 text-3xl font-medium'>Messages</h2>
      <div className='mb-4'>
        <div className='mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#4CAF50]'>
          <svg
            width='65'
            height='65'
            viewBox='0 0 65 65'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0_62_252)'>
              <circle cx='32.5' cy='32.5' r='32.5' fill='#2C2D30' />
              <g clip-path='url(#clip1_62_252)'>
                <path
                  d='M31.0184 17.9627C31.5862 15.9676 34.4138 15.9676 34.9816 17.9627L36.8462 24.5142C37.1509 25.5847 38.2507 26.2197 39.3301 25.9484L45.9278 24.2901C47.9373 23.785 49.3514 26.2284 47.9125 27.7192L43.1672 32.635C42.3966 33.4334 42.3966 34.6986 43.1672 35.4969L47.9125 40.4128C49.3514 41.9035 47.9373 44.3469 45.9278 43.8419L39.3301 42.1836C38.2507 41.9122 37.1509 42.5473 36.8462 43.6177L34.9816 50.1692C34.4138 52.1644 31.5862 52.1643 31.0184 50.1692L29.1538 43.6177C28.8491 42.5473 27.7493 41.9122 26.6699 42.1836L20.0722 43.8419C18.0627 44.3469 16.6486 41.9035 18.0875 40.4127L22.8328 35.4969C23.6034 34.6986 23.6034 33.4334 22.8328 32.635L18.0875 27.7192C16.6486 26.2284 18.0627 23.785 20.0722 24.2901L26.6699 25.9484C27.7493 26.2197 28.8491 25.5846 29.1538 24.5142L31.0184 17.9627Z'
                  fill='#00EC97'
                />
                <ellipse
                  cx='43.7549'
                  cy='17.4157'
                  rx='2.26761'
                  ry='2.26772'
                  fill='#00EC97'
                />
              </g>
            </g>
            <defs>
              <clipPath id='clip0_62_252'>
                <rect width='65' height='65' fill='white' />
              </clipPath>
              <clipPath id='clip1_62_252'>
                <rect
                  width='46'
                  height='46'
                  fill='white'
                  transform='translate(10 10)'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className='text-center'>
          <h3 className='text-l text-left font-light'> Proxima</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;