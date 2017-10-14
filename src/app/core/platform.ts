type PlatformKey = 'STEAM' | 'ORIGIN' | 'GOG';

export class Platform {
	static LIST: Platform[] = [
		{key: 'STEAM', title: 'Steam', id: null},
		{key: 'ORIGIN', title: 'Origin', id: null},
		{key: 'GOG', title: 'GOG', id: null}
	];

	public key: PlatformKey;
	public title: string;
	public id: number;

	static lookup(key: any): Platform {
		const matched = Platform.LIST.filter((s) => s.key === key);
		return matched.length > 0 ? matched[0] : null;
	}
}
