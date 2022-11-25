/* Generated with TypeScript snippets */

import { Bank } from "src/core/bank/bank";
import { BankKey } from "src/core/bank/bank-key";
import { BankMap } from "src/core/bank/bank-map";
import starcode from "src/core/scarcode/starcode";
import { SSFParam } from "./SSFParam";
import { SSFStorage } from "./SSFStorage";

/** SSFData **
* ...
* @Author Star Noob
* @Created 2022-11-14
*/

export class SSFData {

	public version: number;
	public lightData: SSFParam[];
	public heavyData: SSFParam[];
	public speedruns: SSFParam[][][];
	public options: SSFParam[];

	private _storage: SSFStorage;
	private _playerID: string;
	private _scKey: string;
	private _hashLevel: number;
	private _parts: number;
	private _bosses: number;
	private _difficults: number;
	private _players: number;

	constructor(playerID: string, skipGenerating?: boolean) {
		this.playerID = playerID;
		this.init(skipGenerating);
	}

	//-------------------------------------------------- PUBLIC ---------------------------------------------------

	public read(bank: Bank): {} {

		this.reloadStorage(bank, 'lightData');
		for (let i: number = 0; i < 6; i++)
			this.lightData[i].value = this._storage.getInt();
		this._storage.getInt(); // unused random value
		if (this._storage.getInt() != this.version)
			throw new Error('Invaliid version in lightData');

		// 2. heavyData:
		this.reloadStorage(bank, 'heavyData');
		for (let i: number = 0; i < this._parts; i++)
			this.heavyData[i].value = this._storage.getInt();
		for (let i: number = 0; i < this._bosses; i++)
			this.heavyData[i + this._parts].value = this._storage.getInt();
		this.heavyData[this._parts + this._bosses].value = this._storage.getInt();
		this.heavyData[this._parts + this._bosses + 1].value = this._storage.getBool();
		this.heavyData[this._parts + this._bosses + 2].value = this._storage.getInt();
		this._storage.getInt(); // unused random value
		if (this._storage.getInt() != this.version)
			throw new Error('Invaliid version in heavyData');

		// 3. Speedruns:
		this.reloadStorage(bank, 'speedrunsData');
		for (let i: number = 0; i < this._difficults; i++)
			for (let j: number = 0; j < this._parts; j++) {
				let solo: number = 0;
				let team: number = 0;
				for (let k: number = 0; k < this._players; k++) {
					const v: number = this._storage.getInt();
					k < 2 ? solo = Math.max(solo, v) : team = Math.max(team, v);
				}
				this.speedruns[i][j][0].value = this.n2t(solo);
				this.speedruns[i][j][1].value = this.n2t(team);
			}
		this._storage.getInt(); // unused random value
		if (this._storage.getInt() != this.version)
			throw new Error('Invaliid version in speedrunsData');

		// 4. options:
		this._storage.data = bank.sections.get('stats').get('options').value;
		for (let i: number = 0; i < 6; i++)
			if (i > 0 && i < 5)
				this.options[i].value = this._storage.getBool();
			else
				this.options[i].value = this._storage.getInt();
		for (let i: number = 0; i < 10; i += 2) {
			this.options[i + 6].value = this._storage.getBool();
			this.options[i + 7].value = this._storage.getInt();
		}

		return { lightData: this.lightData, heavyData: this.heavyData, speedruns: this.speedruns, options: this.options };
	}

	private storageToSC(): string {
		return starcode.encrypt(starcode.addHash(starcode.compress(this._storage.data), this._hashLevel), this._scKey);
	}

	public save(bank: Bank): string {
		bank.addSection('stats');
		bank.addKey('version', 'FIXED', '2.01', 'stats');

		// 1. light data:
		this._storage.reset();
		for (let i: number = 0; i < 6; i++)
			this._storage.addInt(this.lightData[i].value as number);
		this._storage.addInt(this.r(1, 500));
		this._storage.addInt(this.version);

		bank.addKey('lightData', 'STRING', this.storageToSC(), 'stats');

		// 2. heavy data:
		this._storage.reset();
		for (let i: number = 0; i < 10; i++)
			if (this.heavyData[i].type == 'number')
				this._storage.addInt(this.heavyData[i].value as number);
			else
				this._storage.addBool(this.heavyData[i].value as boolean);
		this._storage.addInt(this.r(1, 500));
		this._storage.addInt(this.version);
		bank.addKey('heavyData', 'STRING', this.storageToSC(), 'stats');

		// 3. speedruns:
		this._storage.reset();
		for (let i: number = 0; i < this._difficults; i++)
			for (let j: number = 0; j < this._parts; j++)
				for (let k: number = 0; k < this._players; k++)
					this._storage.addInt(this.t2n(
						k < 2 ? this.speedruns[i][j][0].value as string : this.speedruns[i][j][1].value as string
					));
		this._storage.addInt(this.r(1, 500));
		this._storage.addInt(this.version);
		bank.addKey('speedrunsData', 'STRING', this.storageToSC(), 'stats');

		// 4. options:
		this._storage.reset();
		for (let i: number = 0; i < 6; i++)
			if (i > 0 && i < 5)
				this._storage.addBool(this.options[i].value as boolean);
			else
				this._storage.addInt(this.options[i].value as number);
		for (let i: number = 0; i < 10; i += 2) {
			this._storage.addBool(this.options[i + 6].value as boolean);
			this._storage.addInt(this.options[i + 7].value as number);
		}
		bank.addKey('options', 'STRING', this._storage.data, 'stats');

		// result
		bank.sort();
		bank.updateSignature();

		return bank.getAsString();
	}

	// realistic random combination
	public generateDefault(myKillz?: number): {} {

		// 1. light data:
		const killz: number = myKillz ? myKillz : this.r(500000, 9000000);
		this.lightData = [
			{ type: 'number', value: killz, description: 'Kills' },
			{ type: 'number', value: Math.floor(killz / this.r(180, 220)), description: 'Points' },
			{ type: 'number', value: Math.floor(killz / this.r(3200, 3500)), description: 'Scientists' },
			{ type: 'number', value: Math.floor(killz / this.r(1500, 1800)), description: 'Essences' },
			{ type: 'number', value: Math.floor(killz / this.r(8000, 12000)), description: 'Psi Orbs' },
			{ type: 'number', value: Math.floor(killz / this.r(14000, 16000)), description: 'MoopyHats' }
		];

		// 2. heavy data:
		this.heavyData = [];
		for (let i: number = 0; i < this._parts; i++) {
			const wins: number = Math.floor(killz / this.r(1200 * (i + 1), 2000 * (i + 1)));
			this.heavyData.push({ type: 'number', value: wins, description: 'Wins ' + (i + 1) });
		}
		for (let i: number = 0; i < this._bosses; i++) {
			const bkillz: number = Math.floor(killz / this.r(800, 3200));
			this.heavyData.push({ type: 'number', value: bkillz, description: 'Boss ' + (i + 1) + ' kills', hidden: false });
		}
		this.heavyData.push(
			{ type: 'number', value: this.r(10, 50), description: 'Flawless' },
			{ type: 'boolean', value: true, description: 'Tutorial' },
			{ type: 'number', value: this.r(0, 10), description: 'ArchivedAcv' }
		);

		// 3. speedruns:
		this.speedruns = [];
		for (let i: number = 0; i < this._difficults; i++) {
			this.speedruns.push([]);
			for (let j: number = 0; j < this._parts; j++) {
				this.speedruns[i].push([]);
				for (let k: number = 0; k < 2; k++) {
					this.speedruns[i][j].push(
						{ type: 'string', value: this.n2t(this.r(250, 500) * Math.pow((i + 1), 1.5) / (k + 1)), description: 'time ' }
					);
				}
			}
		}

		// 4. options. just for store
		this.options = [
			{ type: 'number', value: 0, description: 'Hero type' },
			{ type: 'boolean', value: false, description: 'Hero selected' },
			{ type: 'boolean', value: false, description: 'Speedrun details' },
			{ type: 'boolean', value: true, description: 'Hero panel' },
			{ type: 'boolean', value: false, description: 'Hive panel' },
			{ type: 'number', value: 0, description: 'Unit selection' },

			{ type: 'boolean', value: true, description: 'Control group 1b', hidden: true },
			{ type: 'number', value: 1, description: 'Control group 1n', hidden: true },
			{ type: 'boolean', value: true, description: 'Control group 2b', hidden: true },
			{ type: 'number', value: 2, description: 'Control group 2n', hidden: true },
			{ type: 'boolean', value: true, description: 'Control group 3b', hidden: true },
			{ type: 'number', value: 3, description: 'Control group 3n', hidden: true },
			{ type: 'boolean', value: true, description: 'Control group 4b', hidden: true },
			{ type: 'number', value: 3, description: 'Control group 4n', hidden: true },
			{ type: 'boolean', value: true, description: 'Control group 5b', hidden: true },
			{ type: 'number', value: 3, description: 'Control group 5n', hidden: true }
		];

		return { lightData: this.lightData, heavyData: this.heavyData, speedruns: this.speedruns, options: this.options };
	}

	public get fullData(): {} {
		return { lightData: this.lightData, heavyData: this.heavyData, speedruns: this.speedruns, options: this.options };
	}

	public set playerID(value: string) {
		this._playerID = value;
		this._scKey = 'gehkaggen11' + this._playerID; // if we change user id
	}

	//------------------------------------------------- PROTECTED -------------------------------------------------

	protected init(skipGenerating?: boolean): void {
		this.version = 2011; //2.010; just store version as ceil(v * 1000) here
		this.lightData = [];
		this.heavyData = [];
		this.speedruns = [];
		this.options = [];

		this._storage = new SSFStorage();
		this._scKey = this._playerID + 'gehkaggen11'; // protection from noobs lmao :)
		this._hashLevel = 4;
		this._parts = 3;
		this._bosses = 4;
		this._difficults = 6;
		this._players = 6;

		if (skipGenerating)
			return;

		this.generateDefault();
	}

	//-------------------------------------------------- PRIVATE --------------------------------------------------

	// random value from min...max
	private r(min: number, max: number): number {
		return Math.round(Math.random() * (max - min)) + min;
	}

	// time to number
	private t2n(value: string = '00:10:00'): number {
		const a: string[] = value.split(':');
		return parseInt(a[0]) * 3600 + parseInt(a[1]) * 60 + parseInt(a[2]);
	}

	// number to time
	private n2t(value: number): string {
		return new Date(1000 * value).toISOString().substring(11, 19);
	}

	// todo: move to utils mb? ↑

	private reloadStorage(bank: Bank, key: string, section: string = 'stats'): void {
		const stats: BankMap<BankKey> = bank.sections.get(section);
		let s: string = starcode.decrypt(stats.get(key).value, this._scKey);
		if (!starcode.validate(s, this._hashLevel))
			throw new Error('Invaliid data in ' + section + ' → ' + key + '!');
		s = starcode.decompress(starcode.removeHash(s, this._hashLevel));
		this._storage.data = s;
	}
}