import { ArrowLeftIcon } from '@heroicons/react/solid';

const BackButton = (props: any) => (
	<button
		{...props}
		type="button"
		className="inline-flex items-center px-3 py-2 border border-gray-600 text-sm leading-4 font-medium rounded-md text-gray-600 bg-transparent hover:bg-gray-100 focus:outline-none"
	>
		<ArrowLeftIcon className="-ml-0.5 mr-1 h-4 w-4" aria-hidden="true" />
		Back
	</button>
)

export default BackButton;
