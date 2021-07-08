const Button = (props: any) => (
	<button
		{...props}
		className="inline-flex items-center px-3 py-2 border border-gray-600 text-sm leading-4 font-medium rounded-md text-gray-600 bg-transparent hover:bg-gray-100 focus:outline-none"
	>
		{props.children}
	</button>
)

export default Button;
