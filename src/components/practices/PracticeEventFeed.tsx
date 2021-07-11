import { CheckIcon, XIcon } from '@heroicons/react/solid';

const PracticeEventFeed = ({ events }: any) => {
	return (
			<div className="flow-root">
				<ul className="">
					{events.map((event: any, key: number) => (
						<li key={event.id}>
							<div className="relative pb-8">
								{key !== events.length - 1 ? (
									<span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
								) : null}
								<div className="relative flex space-x-3 items-center">
									<div>
										{
											event.done ? (
												<span className={'h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white'}>
													<CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
												</span>
											) : (
												<span className={'h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center ring-8 ring-white'}>
													<XIcon className="h-4 w-4 text-white" aria-hidden="true" />
												</span>
											)
										}
									</div>
									<div className="min-w-0 flex-1 flex justify-between space-x-4">
										<div>
											<p className="text-sm text-gray-500">
												<span className="font-medium text-gray-900">
													{event.created_at}
												</span>
											</p>
										</div>
										<div className="text-right text-sm whitespace-nowrap text-gray-500">
											<time dateTime={event.datetime}>{event.date}</time>
										</div>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
	);
}

export default PracticeEventFeed;
