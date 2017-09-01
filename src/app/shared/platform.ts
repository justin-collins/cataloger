type PlatformKey = 'STEAM' | 'ORIGIN' | 'GOG';

export class Platform {
	static LIST: Platform[] = [
		{key: 'STEAM', title: 'Steam'},
		{key: 'ORIGIN', title: 'Origin'},
		{key: 'GOG', title: 'GOG'}
	];

	public key: PlatformKey;
	public title: string;

	static lookup(key: any): Platform {
		const matched = Platform.LIST.filter((s) => s.key === key);
		return matched.length > 0 ? matched[0] : null;
	}
}
