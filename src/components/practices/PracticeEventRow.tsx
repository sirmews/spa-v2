import PracticeEventStatus from "./PracticeEventStatus";

const PracticeEventRow = ({ practice }: any) => {
	return (
		<>
			{
				practice ? [...practice.events, ...new Array(practice.weekly_frequency).fill({ done:false })].map((event: any, key: any) => (
					<PracticeEventStatus key={key} event={event} />
				)) : ''
			}
		</>
	);
}

export default PracticeEventRow;
