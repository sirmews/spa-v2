import PracticeEventStatus from "./PracticeEventStatus";

const PracticeEventRow = ({ practice }: any) => {
	return (
		<>
			{
				practice ? [...new Array(practice.weekly_frequency).fill({ done:false }), ...practice.events].map((event: any, key: any) => (
					<PracticeEventStatus key={key} event={event} />
				)) : ''
			}
		</>
	);
}

export default PracticeEventRow;
