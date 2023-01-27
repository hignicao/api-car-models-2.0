export type Racer = {
	name: string;
	birth: Date;
	number: number;
};

export type Circuit = {
	track_id: number;
	racer_id: number;
	car_id: number;
	time_lap: number;
};
