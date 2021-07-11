const PracticeEventStatus = ({ event }: any) => (
	<>
		{
			event.done ?  (
				<div className="flex-1 h-6 text-sm font-medium bg-green-500"></div>
			) : (
				<div className="flex-1 h-6 text-sm font-medium bg-gray-300"></div>
			)
		}
	</>
)

export default PracticeEventStatus;
