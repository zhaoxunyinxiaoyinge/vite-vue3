export interface Children {
	name: string;
	log: string;
	lat: string;
}

export interface RootObject {
	name: string;
	log: string;
	lat: string;
	children: Children[];
}