import "../../index.css";

export const Modal = ({shouldShow, onRequestClose, children}) => {
  return shouldShow ? (
    <div
      classname="fixed flex items-center justify-center z-[1] h-full w-full bg-black/40 overflow-auto"
      onClick={onRequestClose}
    >
      <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-8 max-w-md mx-auto rounded-lg shadow-lg">
          <div class="flex justify-between items-center border-b pb-4 mb-4">
            <h2 class="text-xl font-semibold">Modal Title</h2>
            <button
              class="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close modal"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>{children}</div>
          <div class="mt-6 flex justify-end">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
