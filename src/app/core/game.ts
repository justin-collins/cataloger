import { Platform } from './platform';

export class Game {
	public $key: string;
	public title: string;
	public played: boolean;
	public platform: Platform;
	public tags: Array<string>;
}
