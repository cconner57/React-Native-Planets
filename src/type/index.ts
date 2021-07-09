export interface IPlanet {
	name: string;
	overview: {
		content: string;
		source: string;
	},
	structure: {
		content: string;
		source: string;
	},
	geology: {
		content: string;
		source: string;
	},
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
}

export type RootStackParamList = {
	Home: undefined;
	Planet: { otherParam: string };
	Overview: { planet: IPlanet };
	Structure: { planet: IPlanet };
	Surface: { planet: IPlanet };
}
