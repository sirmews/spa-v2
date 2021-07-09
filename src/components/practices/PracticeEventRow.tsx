import PracticeEventStatus from "./PracticeEventStatus";

const PracticeEventRow = ({ practice }: any) => {
	return (
		<>
			{
				practice ? [...new Array(practice.weekly_frequency).fill({ done:false }), ...practice.practice_events].map((event: any, key: any) => (
					<PracticeEventStatus event={event} />
				)) : ''
			}
		</>
	);
}

export default PracticeEventRow;
