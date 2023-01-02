import { IButton } from '.';

const Button = ({ children, onClick }: IButton) => (
  <button
    type="button"
    className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 hover:bg-sky-500/75"
    onClick={onClick}
  >
    {children}
  </button>
);

export { Button };
