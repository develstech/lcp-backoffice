import { IIconsBasicProps } from 'lib/types'

export const LockClosed = ({ classes }: IIconsBasicProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    aria-hidden='true'
    className={`flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 ${classes}`}
    fill='currentColor'
  >
    <path
      fillRule='evenodd'
      d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
      clipRule='evenodd'
    ></path>
  </svg>
)
