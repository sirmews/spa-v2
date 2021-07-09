const PracticeEventStatus = ({ event }: any) => (
	<>
		{
			event.done ?  (
				<div className="inline-flex h-5 w-5 rounded-full text-sm font-medium bg-green-500"></div>
			) : (
				<div className="inline-flex h-5 w-5 rounded-full text-sm font-medium bg-gray-300"></div>
			)
		}
	</>
)

export default PracticeEventStatus;
